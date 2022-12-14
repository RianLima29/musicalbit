import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  COLOR_ACCENT,
  spacing,
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  SCREEN_MOBILE,
  radius,
  COLOR_TEXT,
  COLOR_PRIMARY_LIGHT,
  COLOR_BACKGROUND,
  COLOR_ELEVATION_02,
  COLOR_ELEVATION_03,
} from "../../config";

export const Container = styled.div`
  width: fit-content;
  align-items: center;
  width: fit-content;
  max-width: 300px;
  height: fit-content;
  display: flex;
  position: relative;
  cursor: pointer;

  @media (max-width: ${SCREEN_MOBILE}) {
    align-self: center;
  }
`;

export const TotalPrice = styled.p`
  color: ${COLOR_PRIMARY_DARK};
  font-weight: 600;

  &::before {
    content: " R$";
  }
`;

export const CartIcon = styled(ShoppingCartOutlinedIcon)`
  color: ${COLOR_PRIMARY_DARK};
  margin-right: ${spacing(1)};
`;

export const QuantityBadge = styled.div`
  padding: ${spacing(0.2)};
  position: absolute;
  font-size: 13px;
  top: calc(100% - 3px);
  width: fit-content;
  height: fit-content;
  left: calc(100%);
  color: ${COLOR_PRIMARY_DARK};
  font-weight: bold;
  background-color: ${COLOR_ELEVATION_02};
  border-radius: ${radius(30)};
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;
