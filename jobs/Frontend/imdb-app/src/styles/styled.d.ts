// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: {
      standard: string;
      max: string;
    };

    spacing: {
      half: string;
      single: string;
      double: string;
      triple: string;
      quadrouple: string;
    };

    border: {
      color: string;
    };

    colors: {
      main: string;
      secondary: string;
      black: string;
      white: string;
    };

    body: {
      color: string;
      background: string;
    };
  }
}
