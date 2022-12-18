import { createGlobalStyle } from "styled-components";

import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

import BackgroundImage from "../src/images/pink-background.png";

const GlobalStyles = createGlobalStyle`
    body {
        padding: 0px;
        margin: 0px;
        background-color: #F9C1F0;
        background-image: url(${BackgroundImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    h1 {
        font-family: "Montserrat";
        margin: 0px 0px;
    }

    h2 {
        font-family: "Montserrat";
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: white;
    }

    section {
        width: 80%;
        max-width: 1250px;
        margin: auto;
        @media (max-width: 960px) {
            width: 90%;
  }
       }

    p {
        margin: 0px;
        font-family: Lato;
        font-weight: 300;
        font-size: 15px;
        line-height: 25px;
        letter-spacing: 0.08em;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;
