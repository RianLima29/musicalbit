import styled from "styled-components";
import {
  COLOR_ELEVATION_01,
  COLOR_PRIMARY,
  radius,
  spacing,
} from "../../config";

export const Container = styled.div`
  cursor: pointer;
  height: 260px;
  width: 200px;
  min-width: 200px;
  background-color: ${COLOR_ELEVATION_01};
  margin: ${spacing(2)};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: ${radius(2)};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing(2)} ${spacing(3)};
  text-align: center;
  justify-content: center;
`;
export const Title = styled.p`
  font-weight: 500;
`;

export const Price = styled.p`
  color: ${COLOR_PRIMARY};
  margin-top: ${spacing(4)};
  font-weight: 500;

  &::before {
    content: "R$ ";
  }
`;
export const Description = styled.p`
  margin-top: ${spacing(2)};
  font-size: 12px;
  color: #ccc;
  font-weight: 200;
`;

interface Photo {
  photoUrl: string
}

export const Photo = styled.div<Photo>`
  width: 100px;
  height: 100px;
  margin-top: ${spacing(2)};
  background-image: url(${p => p.photoUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
