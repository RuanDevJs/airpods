import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, ul, li, p, span, a, img {
    max-width: 100%;
    display: block;
  }

  body, span, a {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: "#1D1D1F"
  }

  body {
    background: linear-gradient(90deg, #EDF4FA, 60%, #fff);
  }

`;
