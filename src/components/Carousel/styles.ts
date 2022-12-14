import styled from "styled-components";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { COLOR_TEXT } from "../../config";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface ContentContainer {
  width: string;
}

export const ContentContainer = styled.div<ContentContainer>`
  width: fit-content;
  height: 100%;
  height: fit-content;
  display: flex;
  overflow-x: scroll;
  max-width: 80%;

  &::-webkit-scrollbar{
    display: none;
  }
`;

export const ArrowLeft = styled(FiChevronLeft)`
  color: ${COLOR_TEXT};
  font-size: 40px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ArrowRight = styled(FiChevronRight)`
  color: ${COLOR_TEXT};
  font-size: 40px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;
