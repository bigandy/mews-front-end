import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    .container {
        max-width: 100ch;
        margin-inline: auto;
    }

    body {
        background-color: ${(props) => props.theme.colors.secondary};
    }

    ::placeholder {
        color: white;
    }
`;
