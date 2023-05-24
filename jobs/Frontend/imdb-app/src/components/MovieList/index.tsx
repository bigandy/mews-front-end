import { useAppSelector } from "../../hooks";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { Movie } from "../../types";

const MovieListContainer = styled.div`
  padding: ${(props) => props.theme.spacing.single};
  margin-block: ${(props) => props.theme.spacing.quadrouple};
`;

const MovieList = () => {
  const search = useAppSelector((state) => state.search.search);
  const movies = useAppSelector(
    (state) => state.moviesApi.queries[`search("${search}")`]?.data ?? []
  );

  return (
    <MovieListContainer>
      {
        // @ts-expect-error
        Boolean(movies?.length > 0) ? (
          // @ts-expect-error
          movies.map((movie: Movie) => (
            <MovieListItem key={movie.id} movie={movie} />
          ))
        ) : (
          <div>No Movies Found</div>
        )
      }
    </MovieListContainer>
  );
};

const MovieListItemContainer = styled.div`
  border: 1px solid ${(props) => props.theme.border.color};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: ${(props) => props.theme.spacing.double};
  margin-block: ${(props) => props.theme.spacing.quadrouple};
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1em;

  img {
    order: -1;
  }
`;

const MovieListItem = ({ movie }: { movie: Movie }) => {
  const router = useRouter();

  const handleMovieClick = () => {
    // update the url to be /movieId={movie.id}
    router.push(`/?movieId=${movie.id}`);
  };

  return (
    <MovieListItemContainer>
      {movie.poster_path ? (
        <img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          alt=""
          width={200}
          height={300}
        />
      ) : (
        <div>No Image</div>
      )}
      <div>
        <h2>{movie.original_title}</h2>
        <p>{movie.overview}</p>
      </div>

      <button onClick={handleMovieClick}>
        View more about {movie.original_title} &rarr;
      </button>
    </MovieListItemContainer>
  );
};

export default MovieList;
