import React from "react";
import * as C from "./styles";
import { QrCodePix } from "qrcode-pix";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
interface Props {
  value: number;
}

export default function PixPayment(props: Props) {
  const [base, setBase] = React.useState<string>("");
  const [payload, setPayload] = React.useState<string>("");

  const qrCodePix = QrCodePix({
    version: "01",
    key: "09111130105",
    name: "Rian Costa",
    city: "BRASILIA",
    message: "MusicalBit",
    value: props.value,
  });

  React.useEffect(() => {
    qrCodePix.base64().then((value) => {
      setBase(value);
    });
    setPayload(qrCodePix.payload());
  }, []);

  return (
    <C.Container>
      {base && <C.QrCode src={base} />}
      {payload && (
        <CopyToClipboard
          text={payload}
          onCopy={() => {
            toast.success("Copiado para a àrea de transferência");
          }}
        >
          <Button variant="outlined" endIcon={<C.ClipboardIcon />}>
            copiar código pix
          </Button>
        </CopyToClipboard>
      )}
    </C.Container>
  );
}
