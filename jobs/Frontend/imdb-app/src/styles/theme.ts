// my-theme.ts
import { DefaultTheme } from "styled-components";

const spacingUnit = 8;

const globalTheme = {
  borderRadius: {
    standard: "5px",
    max: "5em",
  },
  spacing: {
    half: `${spacingUnit * 0.5}px`,
    single: `${spacingUnit}px`,
    double: `${spacingUnit * 2}px`,
    triple: `${spacingUnit * 3}px`,
    quadrouple: `${spacingUnit * 4}px`,
  },

  border: {
    color: "lightgrey",
  },

  colors: {
    white: "white",
    black: "black",
  },
};

const lightTheme: DefaultTheme = {
  ...globalTheme,

  colors: {
    ...globalTheme.colors,
    main: "cyan",
    secondary: "magenta",
  },

  input: {
    background: "black",
    color: "white",
    borderColor: "black",
  },

  body: {
    color: "white",
    background: "black",
  },
};

const darkTheme: DefaultTheme = {
  ...globalTheme,

  colors: {
    ...globalTheme.colors,
    main: "cyan",
    secondary: "magenta",
  },

  input: {
    background: "black",
    color: "white",
    borderColor: "white",
  },

  body: {
    color: "black",
    background: "white",
  },
};

export { lightTheme, darkTheme };
