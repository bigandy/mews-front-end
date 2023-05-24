import { useAppSelector } from "../../hooks";
import { moviesResult } from "../../store/movies/moviesSlice";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { Movie } from "../../types";

const MovieListContainer = styled.div`
  padding: ${(props) => props.theme.spacing.single};
  margin-block: ${(props) => props.theme.spacing.quadrouple};
`;

const MovieList = () => {
  const results = useAppSelector(moviesResult);

  return (
    <MovieListContainer>
      {Boolean(results?.length > 0) ? (
        results.map((movie: Movie) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))
      ) : (
        <div>No Movies Found</div>
      )}
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
      <div>
        <h2>{movie.original_title}</h2>
        <p>{movie.overview}</p>
      </div>

      <img
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
        alt=""
        width={200}
      />

      <button onClick={handleMovieClick}>
        View more about {movie.original_title} &rarr;
      </button>
    </MovieListItemContainer>
  );
};

export default MovieList;
