import styled from "styled-components";
import { COLOR_DIVIDER, spacing } from "../../config";

export const Container = styled.div`
  padding: ${spacing(0.2)};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${COLOR_DIVIDER};
  margin-bottom: ${spacing(.5)};
  width: 100px;
  height: 30px;
    text-align: left;
`;

export const Title = styled.p`
    font-size: 14px;
    font-weight: 300;
`;
