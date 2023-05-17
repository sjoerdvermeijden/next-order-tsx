import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --lightgray: #f5f5f5;
        --darkgray: #333;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: Verdana;
        line-height: 17px;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
    }

    body {

    }
  
`;
