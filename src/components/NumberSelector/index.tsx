import React from "react";
import * as C from "./styles";

interface Props {
  state: [number, React.Dispatch<React.SetStateAction<number>>];
}

export default function NumberSelector(props: Props) {
  return (
    <C.Container>
      <C.Minus
        onClick={() => {
          if (props.state[0] >= 0) {
            props.state[1](props.state[0] - 1);
          }
        }}
      />
      {props.state[0]}
      <C.Plus onClick={() => {
       
            props.state[1](props.state[0] + 1);
          
        }}/>
    </C.Container>
  );
}
