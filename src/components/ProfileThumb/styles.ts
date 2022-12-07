import styled from "styled-components";
import { COLOR_PRIMARY, spacing } from "../../config";

export const Container = styled.div`
    display: flex;
    align-items: center;

`

interface Photo {
    photoUrl:string
}
export const Photo = styled.div<Photo>`
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background-image: url(${p => p.photoUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid ${COLOR_PRIMARY};
    margin-right: ${spacing(2)};
`