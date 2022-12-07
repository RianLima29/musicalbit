import React from "react";
import DropdownItem from "../DropdownItem";
import * as C from "./styles";

interface Props {
    children: JSX.Element | JSX.Element[]
    title: string
}

export default function Dropdown(props: Props) {
    const [showDropdown, setShowDropdown] = React.useState<boolean>(false)

    const handleClick = () => {
        setShowDropdown(!showDropdown)
    }

  return (
    <C.Container onClick={()=>handleClick()}>
      <C.Wrapper active={showDropdown}>
        <C.Title>{props.title}</C.Title>
        <C.Icon />
      </C.Wrapper>
      {showDropdown && (
        <C.Options position="bottom-left" >
            {props.children}
        </C.Options>
      )}
    </C.Container>
  );
}
