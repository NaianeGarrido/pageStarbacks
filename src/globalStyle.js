import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding-top: 20px;
    padding-right: 100px;
    padding-left: 100px;
  }

  .circle {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #017143;
    top: 0;
    left: 0;
    clip-path: circle(800px at right 800px);
    z-index: -1;
  }

  .logo {
    width: 80px;
  }
`;
