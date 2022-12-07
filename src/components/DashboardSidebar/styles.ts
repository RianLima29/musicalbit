import styled, { IntrinsicElementsKeys } from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { ComponentType } from "react";
import {
  COLOR_ELEVATION_01,
  COLOR_OVERLAY,
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  COLOR_TEXT,
  SCREEN_MOBILE,
  spacing,
} from "../../config";

interface Props {
  active: boolean;
  slug?:string;
  path?:string
}

export const Container = styled.div<Props>`
  width: ${(p) => (p.active ? "300px" : "80px")};
  height: 100vh;
  position: fixed;
  background-color: ${COLOR_ELEVATION_01};
  top: 0;
  color: ${COLOR_TEXT};
  display: flex;
  flex-direction: column;
  padding-top: 0;
  transition: 0.5s;
  z-index: 10;
  max-width: 100%;
  max-height: 100%;

  @media (max-width: ${SCREEN_MOBILE}) {
    width: ${(p) => (p.active ? "100vw" : "80px")};
    height: ${(p) => (p.active ? "100vh" : "80px")};
    overflow: hidden;
    position: ${p=> p.active ? 'absolute' :  'initial'};
  }
`;
export const Hamburguer = styled(RxHamburgerMenu)`
  font-size: 35px;
  display: flex;
  cursor: pointer;
  transition: 0.5s;
  align-self: center;
  min-height: 75px;
  margin-bottom: ${spacing(3)};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: 0.3s;
`;
export const SidebarItem = styled.div<Props>`
  background-color: ${(p) => (p.slug == p.path ? COLOR_OVERLAY : "")};
  color: ${(p) => (p.slug == p.path ? COLOR_PRIMARY : COLOR_TEXT)};
  padding: ${spacing(1.5)};
  width: 100%;
  margin-top: ${spacing(1)};
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: ${(p) => (p.active ? "flex-start" : "center")};
  transform: 0.3s;

  &:hover {
    color: ${COLOR_PRIMARY};

    & > p {
      color: ${COLOR_PRIMARY};
    }
  }

  & > p {
    color: ${(p) => (p.slug == p.path? COLOR_PRIMARY : COLOR_TEXT)};
    opacity: ${(p) => (p.active ? "1" : "0")};
    width: ${(p) => (p.active ? "fit-content" : "0")};
    cursor: ${(p) => (p.active ? "pointer" : "default")};
  }
`;

export const SidebarItemText = styled.p`
  margin-left: ${spacing(1)};
  transition: 0.3s;
`;

export const Gap = styled.div<Props>`
  height: 100vh;
  max-height: 100%;
  min-width: ${(p) => (p.active ? "300px" : "80px")};
  transition: 0.5s;

  @media (max-width: ${SCREEN_MOBILE}) {
    display: none;
  }
`;
