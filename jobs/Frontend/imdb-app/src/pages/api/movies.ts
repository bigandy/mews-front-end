import type { NextApiHandler } from "next";

const moviesHandler: NextApiHandler = async (request, response) => {
  const { query = "" } = request.body;

  const key = process.env.IMDB_API_KEY!;

  const searchParams = new URLSearchParams({
    api_key: key,
    query: query,
    page: "1",
    adult: "false",
  });

  const moviesApiFetch = await fetch(
    `https://api.themoviedb.org/3/search/movie?${searchParams}`
  )
    .then((response) => response.json())
    .catch((e) => console.error(e));

  response.json({ data: moviesApiFetch.results });
};

export default moviesHandler;
