import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Movie, SingleMovie } from "../../types";

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/movie/" }),
  endpoints: (builder) => ({
    search: builder.query<
      { results: Movie[]; total_pages: number },
      { query: string; page: number }
    >({
      query: ({ query, page }) => `search?query=${query}&page=${page}`,
    }),
    detail: builder.query<SingleMovie, string>({
      query: (name) => `detail?movieId=${name}`,
    }),
  }),
});

export const { useSearchQuery, useDetailQuery } = moviesApi;
