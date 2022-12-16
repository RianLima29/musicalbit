import styled from "styled-components";
import { BsClipboard } from "react-icons/bs";
import { spacing } from "../../config";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QrCode = styled.img`
  margin: ${spacing(3)};
`;

export const ClipboardIcon = styled(BsClipboard)``;
