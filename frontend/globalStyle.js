import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Quicksand', sans-serif;
    color: black;
    background: white;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;
