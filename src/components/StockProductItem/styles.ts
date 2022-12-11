import styled from "styled-components";
import {
  COLOR_ELEVATION_01,
  COLOR_ELEVATION_02,
  COLOR_ELEVATION_03,
  COLOR_TEXT,
  radius,
  spacing,
} from "../../config";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  margin: ${spacing(1)} 0 ${spacing(1)} 0;
  border-radius: ${radius(1)};
  padding: ${spacing(2)};
  background-color: ${COLOR_ELEVATION_02};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductPreview = styled.img`
  width: 76px;
  max-height: ${(p) => p.height};
  border: 3px solid ${COLOR_ELEVATION_03};
  border-radius: ${radius(1)};
  min-height: 100%;
  max-width: 76px;
  object-fit: cover;
  object-position: center top;
`;

export const Name = styled.p`
  color: ${COLOR_TEXT};
  font-size: 14px;
  font-weight: 300;
`;

export const InStock = styled.p`
  font-weight: 200;
  font-size: 12px;
`;

export const Price = styled.p`
  font-weight: 200;
  font-size: 13px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin: 0 ${spacing(2)} 0 ${spacing(2)};
  height: 100%;
`;

export const InfoContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 ${spacing(2)} 0 ${spacing(2)};
  height: fit-content;
`;
