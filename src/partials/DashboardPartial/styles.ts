import styled from "styled-components";
import { SCREEN_MOBILE, spacing } from "../../config";

export const MainContainer = styled.div`

    display: flex;

`

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: ${SCREEN_MOBILE}){
        width: calc(100% - 80px);
    }

`

export const ContentContainer = styled.div`

    width: 100%;
    height: 100%;
    padding: ${spacing(2)};
    display: flex;
    justify-content: center;

    @media (max-width: ${SCREEN_MOBILE}){
        width: 100vw;
        min-width: 100vw;
        margin-left: -80px;
    }
   

`