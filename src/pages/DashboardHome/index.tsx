import React from "react";
import DashboardPartial from "../../partials/DashboardPartial/DashboardPartial";
import { useAddProductMutation } from "../../redux/api/apiSlice";
import {Button, Input} from '@mui/material'
import * as C from "./styles";

export default function DashboardHome() {
  const [addProduct, addProductState] = useAddProductMutation()
  return (
    <DashboardPartial>
      Home
    </DashboardPartial>
  );
}
