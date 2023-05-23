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

export default Input;
