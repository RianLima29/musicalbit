import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";
import {
  COLOR_DIVIDER,
  COLOR_ELEVATION_01,
  COLOR_PRIMARY_DARK,
  radius,
  SCREEN_MOBILE,
  spacing,
} from "../../config";

export const MainContainer = styled.div`
  width: 100vw;
  height: fit-content;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  margin-top: ${spacing(5)};
  width: 80vw;
  height: fit-content;
  max-height: fit-content;
  background-color: ${COLOR_ELEVATION_01};
  border-radius: ${radius(2)};
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  @media (max-width: ${SCREEN_MOBILE}) {
    text-align: center;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  padding: ${spacing(2)};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-width: 100%;
  min-height: 400px;
  height: fit-content;
  flex: 1;
`;

export const RightSide = styled.div`
  min-width: 350px;
  width: 100%;
  height: 400px;
  flex: 1;
  padding: ${spacing(4)} ${spacing(2)};
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: fit-content;
  align-items: center;
  display: flex;
  border-bottom: 2px solid rgba(100, 100, 100, 0.5);
  padding: ${spacing(3)};
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ItemContainerRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-top: ${spacing(2)};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

interface MainImage {
  photoUrl: string;
}

export const MainImage = styled.div<MainImage>`
  width: 100px;
  height: 100px;
  background-image: url(${(p) => p.photoUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${spacing(3)};
`;

export const ItemTitle = styled.h3`
  justify-self: flex-start;
  margin-left: ${spacing(2)};
  font-weight: 400;
`;

export const ItemPrice = styled.p`
  margin-left: ${spacing(2)};
  margin-top: ${spacing(1)};
  font-size: 13px;
  font-weight: 100;
`;

export const Plus = styled(AiOutlinePlus)`
  cursor: pointer;
  margin-left: ${spacing(1)};
  font-size: 20px;
  color: rgba(100, 100, 100, 0.5);
`;

export const Minus = styled(AiOutlineMinus)`
  cursor: pointer;
  margin-right: ${spacing(1)};
  font-size: 20px;
  color: rgba(100, 100, 100, 0.5);
`;

export const CartTitle = styled.h3`
  font-weight: 400;
`;

export const CartWarning = styled.p`
  margin-top: ${spacing(5)};
  text-align: center;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const QuantityValueContainer = styled.p`
  padding: ${spacing(1)} ${spacing(3)};
  border: 2px solid rgba(100, 100, 100, 0.5);
  border-radius: ${radius(1)};
`;

export const DeleteButton = styled(IoCloseOutline)`
  color: rgba(100, 100, 100, 0.5);
  font-size: 36px;
  cursor: pointer;
`;

export const TotalText = styled.h3`
  margin-top: ${spacing(3)};
  font-weight: 300;
`;
