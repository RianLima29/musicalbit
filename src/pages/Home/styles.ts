import styled from "styled-components";
import { COLOR_ACCENT, COLOR_PRIMARY, spacing } from "../../config";

export const BannerContainer = styled.div`


position: relative;
margin: ${spacing(3)};

`

export const BannerTitle = styled.h2`

    font-size: 11vw;
    opacity: 0.1;
    display: flex;
    justify-content: center;


`
export const BannerSubtitle = styled.h2`

    font-size: 7vw;
    opacity: 0.9;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;

    & span {
        color: ${COLOR_PRIMARY};
    }

`