import { Fragment } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import Input from "../components/Search";
import SingleMovie from "../components/SingleMovie";
import MovieList from "../components/MovieList";

import styles from "../styles/Home.module.css";

const IndexPage: NextPage = () => {
  const router = useRouter();

  const movieId = router.query.movieId;

  return (
    <div className={styles.container}>
      <h1>IMDB App</h1>
      <Input />
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
