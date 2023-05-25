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
  loading: boolean;
  // error: boolean;
};

const SearchInput = styled.input<StyleTypes>`
  padding: 1rem;
  width: 100%;
  border: 1px solid transparent;

  ${(props) =>
    props.primary &&
    css`
      color: props.theme.body.color;
      background: props.theme.body.background;

      &:focus {
        background: darkslategray;
      }
    `}
`;

function Search() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const page = useAppSelector((state) => state.search.page);

  const [input, setInput] = useState(search);
  const debouncedInput = useDebounce<string>(input, 500);

  const { error, isLoading } = useSearchQuery({
    query: debouncedInput,
    page: page,
  });

  useEffect(() => {
    dispatch(setSearch(debouncedInput));
  }, [debouncedInput]);

  const handleInput = (e: any) => {
    setInput(e.target.value);
  };

  const placeholder = "Set Movie Search Term";

  return (
    <SearchInput
      aria-label={placeholder}
      value={input}
      onChange={handleInput}
      placeholder={placeholder}
      primary
      loading={isLoading}
    />
  );
}

export default Search;
