import React from 'react' 
import * as C from './styles' 

interface Props {
    contentWidth: string
    children: JSX.Element | JSX.Element[] | undefined
}
 
export default function Carousel(props: Props) { 
    const contentContainerRef = React.useRef() as React.RefObject<HTMLDivElement>

    contentContainerRef.current?.scrollTo({left: contentContainerRef.current?.scrollLeft + 30})

    const handleArrowRightClick = ()=>{
        contentContainerRef.current?.scrollTo({left: contentContainerRef.current?.scrollLeft + parseInt(props.contentWidth), behavior:'smooth'})
    }
    const handleArrowLeftClick = ()=>{
        contentContainerRef.current?.scrollTo({left: contentContainerRef.current?.scrollLeft + -parseInt(props.contentWidth), behavior:'smooth'})
    }
    
    return ( 
        <C.Container>
            <C.ArrowLeft onClick={handleArrowLeftClick}/>
                <C.ContentContainer ref={contentContainerRef} width={props.contentWidth}>
                    {props.children}
                </C.ContentContainer>
            <C.ArrowRight onClick={handleArrowRightClick}/>
        </C.Container>
    ) 
}