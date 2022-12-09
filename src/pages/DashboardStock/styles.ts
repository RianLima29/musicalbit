import styled from 'styled-components'
import { COLOR_ELEVATION_01, radius, spacing } from '../../config'

export const ProductsContainer = styled.div`

    width: 100%;
    height: 100%;
    padding: ${spacing(2)};
    background-color: ${COLOR_ELEVATION_01};
    border-radius: ${radius(1)};
    overflow: auto;
    display: flex;
    flex-direction: column;

`

export const WarningText = styled.h3`

    align-self: center;

`