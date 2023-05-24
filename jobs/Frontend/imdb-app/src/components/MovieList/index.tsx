import { useAppSelector, useAppDispatch } from "../../hooks";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { Movie } from "../../types";

import { setPage } from "../../store/search/searchSlice";

const MovieListContainer = styled.div`
  padding: ${(props) => props.theme.spacing.single};
  margin-block: ${(props) => props.theme.spacing.quadrouple};
`;

const MovieList = () => {
  const query = useAppSelector((state) => state.search.search);
  const page = useAppSelector((state) => state.search.page);
  const movies = useAppSelector((state) => {
    return (
      state.moviesApi.queries[`search({"page":${page},"query":"${query}"})`]
        ?.data ?? []
    );
  });

  return (
    <MovieListContainer>
      <Pagination />
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
      <Pagination />
    </MovieListContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Pagination = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.search.page);

  return (
    <PaginationContainer>
      <button disabled={page < 2} onClick={() => dispatch(setPage(page - 1))}>
        Previous Page
      </button>
      Page {page}{" "}
      <button onClick={() => dispatch(setPage(page + 1))}>Next Page</button>
    </PaginationContainer>
  );
};

const MovieListItemContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.border.color};
  border-radius: ${(props) => props.theme.borderRadius.standard};
  padding: ${(props) => props.theme.spacing.double};
  margin-block: ${(props) => props.theme.spacing.quadrouple};
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1em;
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
          width={100}
          height={150}
        />
      ) : (
        <div>No Image</div>
      )}
      <div>
        <h2>{movie.original_title}</h2>
        <p>{movie.overview}</p>

        <button onClick={handleMovieClick}>
          View more about {movie.original_title} &rarr;
        </button>
      </div>
    </MovieListItemContainer>
  );
};

export default MovieList;
