import { useState } from "react";

import { useAppDispatch } from "../../hooks";
import { searchMoviesAsync } from "../../store/movies/moviesSlice";
import { styled, css } from "styled-components";

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
  const dispatch = useAppDispatch();

  const [input, setInput] = useState("");

  const handleInput = (e: any) => {
    setInput(e.target.value);
    dispatch(searchMoviesAsync(e.target.value));
  };

  const placeholder = "Set Movie Search Term";

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
