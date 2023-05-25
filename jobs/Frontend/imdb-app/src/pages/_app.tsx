import { Fragment } from "react";

import GlobalStyle from "../styles/global";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Head from "next/head";

import store from "../store";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../hooks";

const Toggle = ({ toggleTheme }: { toggleTheme: () => void }) => {
  return <button onClick={toggleTheme}>Switch Theme</button>;
};

export default function IMDBApp({ Component, pageProps }: AppProps) {
  const [theme, themeToggler, isMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!isMounted) {
    return null;
  }

  return (
    <Fragment>
      <Head>
        <title>IMDB App - Andrew JD Hudson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={themeMode}>
        {
          // @ts-ignore
          <Toggle toggleTheme={themeToggler} />
        }
        <Provider store={store}>
          <GlobalStyle />

          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </Fragment>
  );
}
