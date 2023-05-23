import { useAppSelector } from "../../hooks";
import { moviesResult } from "../../features/movies/moviesSlice";
import { useRouter } from "next/router";

const MovieList = () => {
  const results = useAppSelector(moviesResult);

  return (
    <div>
      {Boolean(results?.length > 0) ? (
        results.map((movie: any) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))
      ) : (
        <div>No Movies Found</div>
      )}
    </div>
  );
};

const MovieListItem = ({ movie }: { movie: any }) => {
  const router = useRouter();

  const handleMovieClick = () => {
    // update the url to be /movieId={movie.id}
    router.push(`/?movieId=${movie.id}`);
  };

  return (
    <div>
      <h2 onClick={handleMovieClick}>{movie.original_title}</h2>
    </div>
  );
};

export default MovieList;
