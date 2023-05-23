import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  searchSingleMovieAsync,
  singleMovieResult,
  clearSingleMovie,
} from "../../features/movies/moviesSlice";
import { useRouter } from "next/router";

const SingleMovie = ({ movieId }: { movieId: string }) => {
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
export default SingleMovie;
