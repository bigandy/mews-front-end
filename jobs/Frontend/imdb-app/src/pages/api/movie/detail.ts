import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (request, response) => {
  const { movieId = "" } = request.body;

  const key = process.env.IMDB_API_KEY!;

  const searchParams = new URLSearchParams({
    api_key: key,
  });

  const moviesApiFetch = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?${searchParams}`
  )
    .then((response) => response.json())
    .catch((e) => console.error(e));

  response.json({ data: moviesApiFetch });
};

export default handler;
