import { styled } from "styled-components";
import { useDetailQuery } from "../../store/movies/moviesApi";
import { useRouter } from "next/router";
import { Fragment } from "react";

const SingleMovieContainer = styled.div`
  display: grid;

  h3 {
    margin-top: 1rem;
  }

  button {
    all: unset;
  }

  ul {
    padding-left: 1rem;
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }
`;

const TopRow = styled.div`
  @media (min-width: 700px) {
    grid-column: 1 / span 2;
  }
`;

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

  console.log(data);

  return (
    <div>
      {data && (
        <SingleMovieContainer>
          <TopRow>
            <button onClick={handleBack}>&larr; Back to Home</button>

            <h3>{data.title}</h3>
            <h4>{data.tagline}</h4>
          </TopRow>
          <div>
            {data.poster_path && (
              <img
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.poster_path}`}
                alt=""
              />
            )}
          </div>
          <div>
            <h4>Overview</h4>
            <p>{data.overview || "no overview"}</p>
            {data.genres.length > 0 && (
              <Fragment>
                <h4>Genres</h4>
                <ul>
                  {data.genres.map((genre) => {
                    return <li key={genre.id}>{genre.name}</li>;
                  })}
                </ul>
              </Fragment>
            )}
            <h4>Date of Release</h4>
            <p>{data.release_date}</p>
          </div>
        </SingleMovieContainer>
      )}
    </div>
  );
};
export default SingleMovie;
