import styled from "styled-components";
import {
  COLOR_ELEVATION_01,
  radius,
  spacing,
  COLOR_ELEVATION_02,
  COLOR_TEXT,
  COLOR_ERROR,
  SCREEN_MOBILE,
} from "../../config";

export const ContentContainer = styled.form`
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;
  padding: ${spacing(2)};
  background-color: ${COLOR_ELEVATION_01};
  border-radius: ${radius(1)};
  display: flex;
  overflow: auto;
  flex-direction: column;
  align-items: center;

`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
  justify-self: flex-end;

  @media (max-width: ${SCREEN_MOBILE}) {
    align-self: flex-start;
    justify-self: flex-start;
  }
`;

export const LeftSide = styled.div`
  height: fit-content;
  width: 50%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;

  @media (max-width: ${SCREEN_MOBILE}) {
    width: 100%;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${SCREEN_MOBILE}) {
    width: 100%;
    height: fit-content;
    
  }
`;

interface FileSelectorWrapper {
  error?: boolean;
}

export const AlterPhotosText = styled.p``;

export const FileSelectorWrapper = styled.label<FileSelectorWrapper>`
  justify-self: flex-start;
  margin-right: ${spacing(1)};
  margin-top: ${spacing(1)};
  padding: ${spacing(1)};
  width: 100%;
  height: 12%;
  min-height: 50px;
  border: 2px dotted ${(p) => (p.error ? COLOR_ERROR : COLOR_ELEVATION_02)};
  border-radius: ${radius(1)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    display: none;
  }
  & p {
    font-size: 13px;
    color: ${(p) => (p.error ? COLOR_ERROR : COLOR_TEXT)};
  }
`;
