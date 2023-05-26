import { useAppSelector, useAppDispatch } from "../../hooks";
import { useRouter } from "next/router";
import { styled, css } from "styled-components";
import { Movie } from "../../types";

import { setPage } from "../../store/search/searchSlice";
import { getSlice } from "../../utils/getSlice";

const MovieListContainer = styled.div`
  padding: ${(props) => props.theme.spacing.single};
  margin-block: ${(props) => props.theme.spacing.quadrouple};
`;

const MovieList = () => {
  const query = useAppSelector((state) => state.search.search);
  const page = useAppSelector((state) => state.search.page);

  // @ts-expect-error
  const { results: movies } = useAppSelector((state) => {
    return (
      state.moviesApi.queries[`search({"page":${page},"query":"${query}"})`]
        ?.data ?? []
    );
  });

  console.log({ movies });

  // const movies = useAppSelector((state) => {
  //   return (
  //     state.moviesApi.queries[`search({"page":${page},"query":"${query}"})`]
  //       ?.data?.results ?? []
  //   );
  // });

  return (
    <MovieListContainer>
      <Pagination />
      {Boolean(movies?.length > 0) ? (
        movies.map((movie: Movie) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))
      ) : (
        <div>No Movies Found</div>
      )}
    </MovieListContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const PaginationDot = styled.div<{ currentPage?: boolean }>`
  border-radius: 50%;
  cursor: pointer;
  background: red;
  color: white;
  padding: 0.25rem;
  transition: 300ms ease;

  &:hover {
    background: rgb(255 0 0 / 0.5);
  }

  ${(props) =>
    props.currentPage &&
    css`
      background: green;
      cursor: not-allowed;

      &:hover {
        background: rgb(0 255 0 / 0.5);
      }
    `}
`;

const Pagination = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.search.page);
  const query = useAppSelector((state) => state.search.search);

  // @ts-expect-error
  const { total_pages } = useAppSelector((state) => {
    return (
      state.moviesApi.queries[`search({"page":${page},"query":"${query}"})`]
        ?.data ?? 1
    );
  });

  const slice = getSlice(page, total_pages);

  return (
    <PaginationContainer>
      <button disabled={page < 2} onClick={() => dispatch(setPage(page - 1))}>
        Previous Page
      </button>

      {slice.map((slice) => {
        return (
          <PaginationDot
            currentPage={page === slice}
            onClick={() =>
              page === slice ? () => {} : dispatch(setPage(slice))
            }
          >
            {slice}
          </PaginationDot>
        );
      })}

      <button
        disabled={page >= total_pages}
        onClick={() => dispatch(setPage(page))}
      >
        Next Page
      </button>
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
