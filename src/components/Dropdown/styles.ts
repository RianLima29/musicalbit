import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import {
  COLOR_ELEVATION_02,
  COLOR_ELEVATION_03,
  COLOR_ELEVATION_05,
  COLOR_TEXT,
  radius,
  spacing,
} from "../../config";

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: ${radius(1)};
  padding: ${spacing(1)} ${spacing(2)};
  transition: .2s;

  &:hover{
    background-color: ${COLOR_ELEVATION_02};
  }
`;

export const Title = styled.p`
  margin-right: ${spacing(1)};

`;

export const Icon = styled(FiChevronDown)`
  color: ${COLOR_TEXT};
  font-size: 18px;
`;

interface Wrapper {
  active: boolean;
}
export const Wrapper = styled.div<Wrapper>`
  display: flex;
  align-items: center;

  & > svg {
    transform: rotate(${(p) => (p.active ? "180" : "0")}deg);
  }
`;

interface Options {
  position: "bottom-left" | "bottom-right" | "bottom-center";
}

export const Options = styled.div<Options>`
  padding: ${spacing(1)};
  background-color: ${COLOR_ELEVATION_02};
  border-radius: ${radius(1)};
  position: absolute;
  ${(p) => {
    switch (p.position) {
      case "bottom-left":
        return "top: 100%; right: 0%;";
        break;
    }
  }}
`;
