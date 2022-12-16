import styled from "styled-components";
import {
  COLOR_ELEVATION_01,
  COLOR_ELEVATION_02,
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
  justify-content: center;
  align-items: center;

  @media (max-width: ${SCREEN_MOBILE}) {
    text-align: center;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-width: 350px;
  width: 60%;
  min-height: 400px;
  height: fit-content;
  flex: 1;

  @media (max-width: ${SCREEN_MOBILE}) {
    height: fit-content;
    min-height: 0;
  }

`;

export const RightSide = styled.div`
  min-width: 350px;
  width: 40%;
  height: 400px;
  flex: 1;
  padding: ${spacing(4)} ${spacing(2)};
  display: flex;
  flex-direction: column;
  @media (max-width: ${SCREEN_MOBILE}) {
    height: fit-content;
  }
`;

export const ProductTitle = styled.h5`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: ${spacing(2)};
`;

export const ProductDesc = styled.p`
  font-size: 16px;
  max-width: 100%;
  font-weight: 200;
  margin-bottom: ${spacing(2)};
`;

export const Wrapper = styled.div`
  display: flex;
  @media (max-width: ${SCREEN_MOBILE}) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100px;
  }
`;

interface MainImage {
  photoUrl: string;
}

export const MainImage = styled.div<MainImage>`
  width: 250px;
  height: 250px;
  background-image: url(${(p) => p.photoUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SecondaryImagesContainer = styled.div`

  width: 250px;
  height: fit-content;
  overflow: auto;
  padding: ${spacing(1)};
  padding-left: ${spacing(2)};
  display: flex;
  align-items: center;
  border: 1px solid ${COLOR_ELEVATION_02};
  cursor: pointer;
`

interface SecondaryImage {
  photoUrl: string;
}

export const SecondaryImage = styled.div<SecondaryImage>`

  height: 90px;
  min-width: 100px;
  margin-right: ${spacing(1)};
  background-image: url(${(p) => p.photoUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


`


export const Price = styled.h5`
  font-size: 18px;
  margin-bottom: ${spacing(3)};
  color: ${COLOR_PRIMARY_DARK};

  &::before {
    content: "R$ ";
  }
`;
