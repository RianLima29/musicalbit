import styled from "styled-components";
import { COLOR_DIVIDER } from "../../config";

interface Props {
    width ?: string
    height ?: string
}
 

export const Divider = styled.div<Props>`

    width: ${p => p.width ?? '80%'};
    height: ${p => p.height ?? '1px'};
    background-color: ${COLOR_DIVIDER};
    justify-self: center;
    align-self: center;
    

`