import { Fragment } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import SearchInput from "../components/Search";
import SingleMovie from "../components/SingleMovie";
import MovieList from "../components/MovieList";

const IndexPage: NextPage = () => {
  const router = useRouter();

  const movieId = router.query.movieId;

  return (
    <div className={"container"}>
      <h1>IMDB App</h1>
      <SearchInput />
      {movieId && movieId !== "" ? (
        <SingleMovie movieId={movieId as string} />
      ) : (
        <Fragment>
          <MovieList />
        </Fragment>
      )}
    </div>
  );
};

export default IndexPage;
