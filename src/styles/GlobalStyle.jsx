import { createGlobalStyle } from "styled-components";
import poppinsMedium from "../assets/fonts/Poppins-Medium.ttf"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins-Medium'), url(${poppinsMedium}) format('truetype');
    }

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

    a {
        text-decoration: none;
        color: #FFF;
    }

    body {
        background-color: blue;
        font-family: 'Poppins', sans-serif;
    }
`