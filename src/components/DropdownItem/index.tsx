import React from 'react' 
import * as C from './styles' 

interface Props {
    onClick ?: ()=>any
    title: string
}
 
export default function DropdownItem(props: Props) { 
    return ( 
        <C.Container onClick={props.onClick}>
            <C.Title>
                {props.title}
            </C.Title>
        </C.Container>
    ) 
}