import styled from "styled-components";
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import { COLOR_TEXT } from "../../config";

export const Loading = styled(AiOutlineLoading3Quarters)`

    color: ${COLOR_TEXT};
    font-size: 60px;
    animation-name: loading;
    animation-duration: .9s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    justify-self: center;
    align-self: center;
    
    @keyframes loading{
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }

`