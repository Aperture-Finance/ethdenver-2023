import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Quicksand', sans-serif;
    color: ${({ theme }) => theme.colors.black}
  }
`
