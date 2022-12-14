import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { COLOR_ELEVATION_02, COLOR_ELEVATION_03, COLOR_ELEVATION_04, COLOR_TEXT, radius, spacing } from "../../config";

export const Container = styled.div`
  padding: ${spacing(1)};
  border-radius: ${radius(20)};
  border: 2px solid ${COLOR_ELEVATION_04};
  width: fit-content;
  display: flex;
  align-items: center;
  color: ${COLOR_ELEVATION_04};
`;
export const Plus = styled(AiOutlinePlus)`
  cursor: pointer;
  margin-left: ${spacing(1)};
  font-size: 20px;
`;

export const Minus = styled(AiOutlineMinus)`
  cursor: pointer;
  margin-right: ${spacing(1)};
  font-size: 20px;
`;
