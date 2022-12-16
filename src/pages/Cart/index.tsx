import { Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import NumberSelector from "../../components/NumberSelector";
import { useGetProductQuery } from "../../redux/api/apiSlice";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import * as C from "./styles";
import { radius, spacing } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addProduct,
  deleteProductByPath,
  ChangeProductQuantity,
} from "../../redux/slices/cartSlice";
import * as buffer from "buffer";
import PixPayment from "../../components/PixPayment";

export default function Cart() {
  window.Buffer = buffer.Buffer;
  const [paymentReady, setPaymentReady] = React.useState<boolean>(false);
  const cartData = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const deleteProduct = (path: string) => {
    dispatch(deleteProductByPath(path));
  };

  const handleChangeProductQuantity = (path: string, operation: "+" | "-") => {
    dispatch(ChangeProductQuantity({ operation: operation, path }));
  };

  const handlePayment = () => {
    setPaymentReady(true);
  };

  const content = cartData.items.map((item, index) => (
    <C.ItemContainer key={index}>
      <C.RowWrapper>
        <C.MainImage photoUrl={item.mainPhoto} />
        <C.Wrapper>
          <C.ItemTitle>{item.name}</C.ItemTitle>
          <C.ItemPrice>
            {(parseFloat(item.price) * item.quantity).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </C.ItemPrice>
        </C.Wrapper>
      </C.RowWrapper>

      <C.ItemContainerRightWrapper>
        <C.QuantityContainer>
          <C.Minus
            onClick={() => handleChangeProductQuantity(item.path ?? "", "-")}
          />
          <C.QuantityValueContainer>{item.quantity}</C.QuantityValueContainer>
          <C.Plus
            onClick={() => handleChangeProductQuantity(item.path ?? "", "+")}
          />
        </C.QuantityContainer>
        <C.DeleteButton
          onClick={() => {
            deleteProduct(item.path ?? "");
          }}
        />
      </C.ItemContainerRightWrapper>
    </C.ItemContainer>
  ));

  return (
    <>
      <C.MainContainer>
        <Header />
        <C.Container>
          <>
            <C.LeftSide>
              {!paymentReady && (
                <>
                  <C.CartTitle>Seu carrinho</C.CartTitle>
                  {cartData.items.length <= 0 && (
                    <C.CartWarning>Não há itens no carrinho!</C.CartWarning>
                  )}
                  {content}
                  <C.TotalText>
                    Total:{" "}
                    {cartData.items
                      .reduce(
                        (prev, curr) =>
                          prev + parseFloat(curr.price) * curr.quantity,
                        0
                      )
                      .toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                  </C.TotalText>

                  <Button
                    onClick={handlePayment}
                    sx={{ marginTop: spacing(2) }}
                    variant="contained"
                  >
                    PAGAR COM PIX
                  </Button>
                </>
              )}
              {paymentReady && (
                <PixPayment
                  value={cartData.items.reduce(
                    (prev, curr) =>
                      prev + parseFloat(curr.price) * curr.quantity,
                    0
                  )}
                />
              )}
            </C.LeftSide>
          </>
        </C.Container>
      </C.MainContainer>
    </>
  );
}
