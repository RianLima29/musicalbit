import styled from 'styled-components'
import { COLOR_ACCENT, COLOR_ELEVATION_01, COLOR_ELEVATION_02, COLOR_ERROR, COLOR_TEXT, radius, spacing } from '../../config'

interface FileSelectorWrapper {
    error?: boolean
}

export const FileSelectorWrapper = styled.label<FileSelectorWrapper>`

    margin-right: ${spacing(1)};
    margin-top: ${spacing(1)};
    padding: ${spacing(1)};
    width: 50%;
    min-height: 50px;
    border: 2px dotted ${p => p.error ? COLOR_ERROR : COLOR_ELEVATION_02};
    border-radius: ${radius(1)};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & input {
        display: none;
    }
    & p {
        font-size: 13px;
        color: ${p => p.error ? COLOR_ERROR : COLOR_TEXT};
    }


`

export const CurrentStepText = styled.h4`

    font-weight: 100;
    margin-bottom: ${spacing(2)};

`

export const FormContainer = styled.form`

    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${COLOR_ELEVATION_01};
    padding: ${spacing(3)};
    border-radius: ${radius(1)};
    min-width: 80%;
    height: fit-content;

`

export const ButtonWrapper = styled.div`

   
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    
    &  button{
        margin-top: ${spacing(2)};
    }

`

export const Wrapper = styled.div`

    display: flex;
    width: 100%;
    margin-top: ${spacing(1)};
    justify-content: center;
    

`

