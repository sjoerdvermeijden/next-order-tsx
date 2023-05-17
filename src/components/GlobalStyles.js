import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        --lightgray: #f5f5f5;
        --red: crimson;
    }

    html {
        font-size: 12px;
        font-family: Verdana,Geneva,sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    form {

        input {
            padding: 3px 5px;
        }
    }
`;

export default GlobalStyle;
