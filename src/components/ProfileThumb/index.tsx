import React from "react";
import Dropdown from "../Dropdown";
import * as C from './styles'

interface Props {
  photoUrl: string;
}

export default function ProfileThumb(props: Props) {
  return (
    <C.Container>
        <C.Photo {...props}/>
    </C.Container>
  );
}
