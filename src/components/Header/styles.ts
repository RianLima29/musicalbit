import styled from "styled-components";
import {
  COLOR_ELEVATION_01,
  COLOR_PRIMARY,
  COLOR_TEXT,
  radius,
  SCREEN_MOBILE,
  spacing,
} from "../../config";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 55px;
  width: 80vw;
  background-color: ${COLOR_ELEVATION_01};
  border-radius: 0 0 ${radius(2)} ${radius(2)};
  padding: ${spacing(1)} ${spacing(3)};
  justify-content: space-between;
  max-width: 100%;

  @media (max-width: ${SCREEN_MOBILE}) {
    width: 100vw;
    border-radius: 0px;
  }
`;

export const Logo = styled.h1`
  font-weight: bolder;
  font-family: "Varela Round";
  font-size: 18px;
  cursor: pointer;
  & span {
    color: ${COLOR_PRIMARY};
  }
`;

interface MobileNav {
  opened: boolean;
}

export const MobileNav = styled.div<MobileNav>`
  position: fixed;
  right: ${(p) => (p.opened ? 0 : "-100vw")};
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${COLOR_ELEVATION_01};
  padding: ${spacing(2)};
  display: flex;
  flex-direction: column;
  justify-content: start;
  transition: 0.3s;
  z-index: 100;
`;
export const CloseMobileNavIcon = styled(IoClose)`
  margin-bottom: ${spacing(2)};
  color: ${COLOR_TEXT};
  font-size: 35px;
  cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  height: 55px;
  margin-bottom: -${spacing(1)};

  @media (max-width: ${SCREEN_MOBILE}) {
    width: 100%;
    flex-direction: column;
    height: fit-content;
  }
`;

export const LinkButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  min-width: 60px;
  width: fit-content;
  height: 100%;
  color: ${COLOR_TEXT};
  margin: 0 ${spacing(1)} 0 ${spacing(1)};
  padding: ${spacing(1)};
  flex-direction: column;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid ${COLOR_PRIMARY};
  }

  @media (max-width: ${SCREEN_MOBILE}) {
    margin-top: ${spacing(2)};
    align-items: flex-start;
    width: 100%;
    height: 50px;
  }
`;

export const HamgurguerButton = styled(RxHamburgerMenu)`
  cursor: pointer;
  color: ${COLOR_TEXT};
  font-size: 30px;
`;
