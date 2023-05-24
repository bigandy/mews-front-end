import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import searchSlice from "./search/searchSlice";
import { moviesApi } from "./movies/moviesApi";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    search: searchSlice,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(moviesApi.middleware);
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
