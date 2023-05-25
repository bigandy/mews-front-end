import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    h1, h2, h3, h4 {
        margin-top: 0;
    }

    button {
        border-radius: ${(props) => props.theme.borderRadius.max};
        background: black; 
        color: white;
        border: none;
        padding: 1rem;
        transition: 300ms ease;

        &:hover:not(:disabled) {
            background: lightgrey; 
            color: black;   
            cursor: pointer;
        }

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
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
