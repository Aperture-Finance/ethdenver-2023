import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(1,1,1,0.1);
    font-family: Poppins;
    color: ${({ theme }) => theme.colors.text}
  }
`
