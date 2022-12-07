import { createGlobalStyle } from "styled-components";
import { COLOR_BACKGROUND, COLOR_TEXT } from "./config";

export const GlobalStyle = createGlobalStyle`

    body{
        background-color: ${COLOR_BACKGROUND};
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        
    }
    p, h1, h2, h3, h4, h5, label{
        color: ${COLOR_TEXT}
    }

`