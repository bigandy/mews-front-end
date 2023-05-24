import { useState } from "react";

import { useAppDispatch } from "../../hooks";
import { searchMoviesAsync } from "../../features/movies/moviesSlice";
import { styled } from "styled-components";

const SearchInput = styled.input<{ primary: boolean }>`
  padding: 1rem;
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
