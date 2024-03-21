import { createGlobalStyle } from "styled-components";
import poppinsMedium from "../assets/fonts/Poppins-Medium.ttf"
import poppinsSemiBold from "../assets/fonts/Poppins-SemiBold.ttf"
import interLight from "../assets/fonts/Inter-Light.ttf"
import interMedium from "../assets/fonts/Inter-Medium.ttf"
import interRegular from "../assets/fonts/Inter-Regular.ttf"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins-Medium'), url(${poppinsMedium}) format('truetype');
    }

    @font-face {
        font-family: 'Poppins';
        src: local('Poppins-SemiBold'), url(${poppinsSemiBold}) format('truetype');
    }

    @font-face {
        font-family: 'Inter';
        src: local('Inter-Light'), url(${interLight}) format('truetype');
    }

    @font-face {
        font-family: 'Inter';
        src: local('Inter-Medium'), url(${interMedium}) format('truetype');
    }

    @font-face {
        font-family: 'Inter';
        src: local('Inter-Regular'), url(${interRegular}) format('truetype');
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
        font-family: 'Poppins', sans-serif;
    }
`