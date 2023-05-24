// my-theme.ts
import { DefaultTheme } from "styled-components";

const spacingUnit = 8;

const theme: DefaultTheme = {
  borderRadius: "5px",

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
    main: "cyan",
    secondary: "magenta",
  },
};

export { theme };
