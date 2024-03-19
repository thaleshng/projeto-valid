import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul {
        list-style-type: none;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    body {
        background-color: #000000;
    }
`