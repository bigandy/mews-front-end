import type { NextPage } from "next";
import { useRouter } from "next/router";
// import Counter from "../features/counter/Counter";
import Input, { MovieList, SingleMovie } from "../features/movies/Input";
import styles from "../styles/Home.module.css";
import { Fragment } from "react";

const IndexPage: NextPage = () => {
  const router = useRouter();

  const movieId = router.query.movieId;

  console.log(movieId);

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
