import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(45deg, #F3A2E6 0%, #FAD494 100%);
    font-family: 'Quicksand', sans-serif;
    color: ${({ theme }) => theme.colors.black}
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;
