import React from 'react' 
import { useNavigate, useParams } from 'react-router-dom'
import { Product } from '../../types/product'

import * as C from './styles' 

interface Props {
    product: Product
}
 
export default function ProductCard(props: Props) { 
    const navigate = useNavigate()

    return ( 
        <C.Container onClick={()=> navigate(`/product-details/${props.product?.path?.split('/').slice(-1)[0]}` ?? '')}>
            <C.Title>{props.product.name}</C.Title>
            <C.Photo photoUrl={props.product.mainPhoto}/>
            <C.Price>{props.product.price}</C.Price>
            <C.Description>{props.product.description}</C.Description>
        </C.Container>
    ) 
}