import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartProduct } from "../../types/cart";
import { Product } from "../../types/product";

const initialState: Cart = { items: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setItemsFromStorage: (state, action: PayloadAction<Cart>) => {
      return {
        ...action.payload,
      };
    },
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      let search = state.items.find((item) => item.path == action.payload.path);
      if (search) {
        search.quantity = search.quantity + action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    deleteProductByPath: (state, action: PayloadAction<string>) => {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          ...state,
          items: [...state.items.filter((item) => item.path != action.payload)],
        })
      );
      return {
        ...state,
        items: [...state.items.filter((item) => item.path != action.payload)],
      };
    },
    ChangeProductQuantity: (
      state,
      action: PayloadAction<{ operation: "+" | "-"; path: string }>
    ) => {
      console.log();
      switch (action.payload.operation) {
        case "+":
          state.items.map((item) => {
            if (item.path == action.payload.path) item.quantity++;
          });
          localStorage.setItem("cart", JSON.stringify(state));

          break;
        case "-":
          state.items.map((item) => {
            if (item.path == action.payload.path && item.quantity > 0)
              item.quantity--;
          });
          localStorage.setItem("cart", JSON.stringify(state));

          break;
      }
    },
  },
});

export const {
  addProduct,
  setItemsFromStorage,
  deleteProductByPath,
  ChangeProductQuantity,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
