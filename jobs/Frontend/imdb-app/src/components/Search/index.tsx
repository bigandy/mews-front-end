import { useState } from "react";

import { useAppDispatch } from "../../hooks";
import { searchMoviesAsync } from "../../features/movies/moviesSlice";

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
      <input
        aria-label={placeholder}
        value={input}
        onChange={handleInput}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Search;
