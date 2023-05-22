import type { NextPage } from "next";

// import Counter from "../features/counter/Counter";
import styles from "../styles/Home.module.css";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>IMDB App</h1>
      {/* <Counter /> */}
    </div>
  );
};

export default IndexPage;
