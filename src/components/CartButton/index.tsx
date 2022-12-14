import React from "react";
import * as C from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

export default function CartButton() {
  const cartData = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();

  return (
    <C.Container onClick={() => navigate("/cart")}>
      <C.CartIcon />
      <C.TotalPrice>
        {cartData.items.reduce(
          (prev, curr) => prev + parseInt(curr.price) * curr.quantity,
          0
        )}
      </C.TotalPrice>
      <C.QuantityBadge>
        {cartData.items.reduce((prev, curr) => prev + curr.quantity, 0)}
      </C.QuantityBadge>
    </C.Container>
  );
}
