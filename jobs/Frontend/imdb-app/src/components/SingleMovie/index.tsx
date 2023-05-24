import { useDetailQuery } from "../../store/movies/moviesApi";
import { useRouter } from "next/router";

const SingleMovie = ({ movieId }: { movieId: string }) => {
  // const result = useAppSelector(singleMovieResult);
  const router = useRouter();

  const { data, isLoading, error } = useDetailQuery(movieId);

  const handleBack = () => {
    // swipe off the movieId from the query params.
    router.replace("/", undefined, { shallow: true });
  };

  // TODO: Get Loading animation, get Error State.
  if (isLoading) {
    <div>loading...</div>;
  }

  if (error) {
    <div>Error</div>;
  }

  return (
    <div>
      <a href="#" onClick={handleBack}>
        &larr; Back to Home
      </a>
      {data && (
        <div>
          <h3>{data.title}</h3>
          <h4>{data.tagline}</h4>

          {data.poster_path && (
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.poster_path}`}
              alt=""
            />
          )}
        </div>
      )}
    </div>
  );
};
export default SingleMovie;
