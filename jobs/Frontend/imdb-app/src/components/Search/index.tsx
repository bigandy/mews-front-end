import { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { useAppSelector, useAppDispatch } from "../../hooks";

// import { useAppDispatch } from "../../hooks";
// import { useGetMoviesListQuery } from "../../store/movies/moviesApi";
// import { searchMoviesAsync } from "../../store/movies/moviesSlice";
// import { useGetPokemonByNameQuery } from "../../store/pokemon/pokemonApi";
import { styled, css } from "styled-components";
import { useSearchQuery } from "../../store/movies/moviesApi";
import { setSearch } from "../../store/search/searchSlice";

type StyleTypes = {
  primary: boolean;
};

const SearchInput = styled.input<StyleTypes>`
  padding: 1rem;

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background: black;

      &:focus {
        background: darkslategray;
      }
    `}
`;

function Search() {
  // const dispatch = useAppDispatch();
  // useGetMoviesListQuery;

  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const page = useAppSelector((state) => state.search.page);

  const [input, setInput] = useState(search);
  const debouncedInput = useDebounce<string>(input, 500);

  const { data, error, isLoading } = useSearchQuery({
    query: debouncedInput,
    page: page,
  });

  useEffect(() => {
    dispatch(setSearch(debouncedInput));
  }, [debouncedInput]);

  const handleInput = (e: any) => {
    setInput(e.target.value);

    // dispatch(searchMoviesAsync(e.target.value));
  };

  console.log({ data, error, isLoading });

  const placeholder = "Set Movie Search Term";

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error </div>;
  }

  return (
    <div>
      <SearchInput
        aria-label={placeholder}
        value={input}
        onChange={handleInput}
        placeholder={placeholder}
        primary
      />
    </div>
  );
}

export default Search;
