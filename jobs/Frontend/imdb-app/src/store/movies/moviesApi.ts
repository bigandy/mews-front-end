import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Movie } from "../../types";

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/movie/" }),
  endpoints: (builder) => ({
    search: builder.query<Movie[], string>({
      query: (name) => `search?query=${name}`,
    }),
    detail: builder.query<Movie, string>({
      query: (name) => `detail?movieId=${name}`,
    }),
  }),
});

export const { useSearchQuery, useDetailQuery } = moviesApi;
