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
import { addProduct, deleteProductByPath, ChangeProductQuantity } from "../../redux/slices/cartSlice";

export default function Cart() {
  const params = useParams();
  const cartData = useSelector((state: RootState) => state.cart);
  const [productCount, setProductCount] = React.useState<number>(1);
  const dispatch = useDispatch();

  const deleteProduct = (path: string) => {
    dispatch(deleteProductByPath(path));
  };

  const handleChangeProductQuantity = (path: string, operation: '+' | '-')=>{
    dispatch(ChangeProductQuantity({operation: operation, path}))
  }

  const content = cartData.items.map((item, index) => (
    <C.ItemContainer key={index}>
      <C.RowWrapper>
        <C.MainImage photoUrl={item.mainPhoto} />
        <C.Wrapper>
          <C.ItemTitle>{item.name}</C.ItemTitle>
          <C.ItemPrice>{parseFloat(item.price )* item.quantity}</C.ItemPrice>
        </C.Wrapper>
      </C.RowWrapper>

      <C.ItemContainerRightWrapper>
        <C.QuantityContainer>
          <C.Minus onClick={()=>handleChangeProductQuantity(item.path ?? '', '-')}/>
          <C.QuantityValueContainer>{item.quantity}</C.QuantityValueContainer>
          <C.Plus onClick={()=>handleChangeProductQuantity(item.path ?? '', '+')}/>
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
              <C.CartTitle>Carrinho</C.CartTitle>
              {cartData.items.length <= 0 && (
                <C.CartWarning>Não há itens no carrinho!</C.CartWarning>
              )}
              {content}
            </C.LeftSide>
            <C.RightSide></C.RightSide>
          </>
        </C.Container>
      </C.MainContainer>
    </>
  );
}
