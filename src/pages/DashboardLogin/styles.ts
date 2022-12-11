import styled from 'styled-components';
import { spacing, SCREEN_MOBILE, COLOR_ELEVATION_02, COLOR_ELEVATION_01 } from '../../config';

export const MainContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${spacing(2)};
    height: 100vh;
    max-height: 100%;
    width: 100vw;
    max-width: 100%;

`

export const LoginContainer = styled.div`

    width: 90vw;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${SCREEN_MOBILE}){
        flex-direction: column;
    }

`

export const LeftContainer = styled.div`

    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${SCREEN_MOBILE}){
        width: 100%;
    }
`

export const RightContainer = styled.div`

    height: fit-content;
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: ${spacing(2)};

    @media (max-width: ${SCREEN_MOBILE}){
        width: 100%;
    };

`

export const LoginIllustration = styled.div`
    background-image: url('/assets/mobile-login.svg');
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

`

export const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

`

export const LoginForm = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;

    & button{
        margin-top: ${spacing(3)};
    }

`

export const LoginText = styled.h2`

    margin-bottom: ${spacing(2)};
    font-weight: 400;

`

