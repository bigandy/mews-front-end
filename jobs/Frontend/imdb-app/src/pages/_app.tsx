import GlobalStyle from "../styles/global";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Head from "next/head";

import store from "../store";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

export default function IMDBApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Head>
          <title>IMDB App - Andrew JD Hudson</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
