import GlobalStyle from "../styles/global";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Head from "next/head";

import store from "../store";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Head>
        <title>IMDB App - Andrew JD Hudson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
