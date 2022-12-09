import { createGlobalStyle } from "styled-components";
import { COLOR_BACKGROUND, COLOR_ELEVATION_01, COLOR_ELEVATION_03, COLOR_TEXT, radius } from "./config";

export const GlobalStyle = createGlobalStyle`

    body{
        background-color: ${COLOR_BACKGROUND};
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;

        &::-webkit-scrollbar{
            background-color: ${COLOR_ELEVATION_01};
            height: 7px;
            width: 7px;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-corner{
            display: none;
        }
        &::-webkit-scrollbar-thumb{
            background-color: ${COLOR_ELEVATION_03};
            border-radius: ${radius(1)};
            height: 10%;
        }
        
    }
    p, h1, h2, h3, h4, h5, label{
        color: ${COLOR_TEXT}
    }


`