export async function fetchMovies(query = ""): Promise<{ data: any }> {
  const response = await fetch("/api/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();
  return result;
}

export async function fetchSingleMovie(movieId = ""): Promise<{ data: any }> {
  const response = await fetch("/api/singleMovie", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ movieId }),
  });

  const result = await response.json();
  return result;
}
