import { useState, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  searchMoviesAsync,
  searchSingleMovieAsync,
  moviesResult,
  singleMovieResult,
  clearSingleMovie,
} from "./moviesSlice";
import { useRouter } from "next/router";
// import styles from "./Counter.module.css";

function Input() {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState("");

  const handleInput = (e: any) => {
    setInput(e.target.value);
    dispatch(searchMoviesAsync(e.target.value));
  };

  const placeholder = "Set Movie Search Term";

  return (
    <div>
      <input
        aria-label={placeholder}
        value={input}
        onChange={handleInput}
        placeholder={placeholder}
      />
    </div>
  );
}

export const MovieList = () => {
  const results = useAppSelector(moviesResult);

  return (
    <div>
      {Boolean(results?.length > 0) ? (
        results.map((movie: any) => {
          return <MovieListItem key={movie.id} movie={movie} />;
        })
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

export const SingleMovie = ({ movieId }: { movieId: string }) => {
  const dispatch = useAppDispatch();
  const result = useAppSelector(singleMovieResult);
  const router = useRouter();

  useEffect(() => {
    const doFetch = async () => {
      dispatch(searchSingleMovieAsync(movieId));
    };

    doFetch();
  }, []);

  const handleBack = () => {
    // swipe off the movieId from the query params.
    router.replace("/", undefined, { shallow: true });
    // empty the singleMovie state in the movieSlice
    dispatch(clearSingleMovie());
  };

  // TODO: Get Loading animation + state.

  return (
    <div>
      <div onClick={handleBack}>&larr; Back to Home</div>
      {result && (
        <div>
          <h3>{result.title}</h3>
          <h4>{result.tagline}</h4>
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${result.poster_path}`}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Input;
