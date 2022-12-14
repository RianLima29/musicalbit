import React from "react";
import CartButton from "../CartButton";
import * as C from "./styles";
import useWindowSize from "../../hooks/useWindowSize";
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const [isMobileWidth, setIsMobileWidth] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const windowSize = useWindowSize();
  const navigate = useNavigate()

  React.useLayoutEffect(() => {
    if (windowSize[0] < 800) {
      setIsMobileWidth(true);
    } else {
      setIsMobileWidth(false);
    }
  }, [windowSize]);

  return (
    <C.Container>
      <C.Logo onClick={()=>navigate('/')}>
        musicalbit<span>.</span>com
      </C.Logo>
      {!isMobileWidth && (
        <>
          <C.ButtonsWrapper>
            <C.LinkButton onClick={()=>navigate('/')}>Home</C.LinkButton>
            <C.LinkButton onClick={()=>navigate('/')}>Loja</C.LinkButton>
          </C.ButtonsWrapper>
          <CartButton />
        </>
      )}

      {isMobileWidth && (
        <>
          <C.HamgurguerButton onClick={() => setOpened(!opened)}/>
          <C.MobileNav opened={opened}>
            <C.CloseMobileNavIcon onClick={() => setOpened(!opened)}/>
            <CartButton />
            <C.ButtonsWrapper>
              <C.LinkButton>Home</C.LinkButton>
              <C.LinkButton>Loja</C.LinkButton>
            </C.ButtonsWrapper>
          </C.MobileNav>
        </>
      )}
    </C.Container>
  );
}
