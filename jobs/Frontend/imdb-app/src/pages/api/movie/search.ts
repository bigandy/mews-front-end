import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (request, response) => {
  const { query } = request.query;

  const api_key = process.env.IMDB_API_KEY!;

  const searchParams = new URLSearchParams({
    api_key,
    query: query as string,
    page: "1",
    adult: "false",
  });

  const moviesApiFetch = await fetch(
    `https://api.themoviedb.org/3/search/movie?${searchParams}`
  )
    .then((response) => response.json())
    .catch((e) => console.error(e));

  response.json(moviesApiFetch.results);
};

export default handler;
