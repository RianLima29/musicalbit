import React from 'react' 
import DashboardSidebar from '../../components/DashboardSidebar'
import DashboardHeader from '../../components/DashbordHeader'
import * as C from './styles'
 

interface Props {
    children ?: JSX.Element | JSX.Element[] | string | boolean
}

export default function DashboardPartial(props: Props) { 
    return ( 
        <C.MainContainer>
            <DashboardSidebar/>
            <C.Container>
                <DashboardHeader/>
                <C.ContentContainer>
                    {props.children}
                </C.ContentContainer>
            </C.Container>
        </C.MainContainer>
    ) 
}