import React from 'react' 
import * as C from './styles' 

interface Props {
    width ?: string
    height ?: string
}
 
export default function Divider(props: Props) { 
    return ( 
        <C.Divider height={props.height} width={props.width}/>
    ) 
}