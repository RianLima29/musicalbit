import styled from "styled-components";
import { COLOR_ELEVATION_01, SCREEN_MOBILE, spacing } from "../../config";

export const Container = styled.div`
  background-color: ${COLOR_ELEVATION_01};
  width: 100%;
  height: 80px;
  min-height: 80px;
  padding: ${spacing(2)} ${spacing(4)};
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

interface Wrapper {
  direction: "row" | "column";
}

export const Wrapper = styled.div<Wrapper>`
  display: flex;
  flex-direction: ${(p) => p.direction};

  align-items: center;
  text-align: left;
`;

export const WelcomeTitle = styled.p`
  align-self: flex-start;
  font-weight: 500;
`;
export const WelcomeBody = styled.p`
  font-weight: 100;
  align-self: flex-start;

  @media (max-width: ${SCREEN_MOBILE}){
    display: none;
  }
`;
