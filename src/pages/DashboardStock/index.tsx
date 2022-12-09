import React from "react";
import { json } from "stream/consumers";
import Loading from "../../components/Loading";
import StockProductItem from "../../components/StockProductItem";
import DashboardPartial from "../../partials/DashboardPartial/DashboardPartial";
import { useGetProductsQuery } from "../../redux/api/apiSlice";
import * as C from "./styles";

export default function DashboardStock() {
  const { data, isLoading } = useGetProductsQuery();
  const content = data?.map((product, index) => (
    <StockProductItem key={index} product={product} />
  ));
  const theresNoContent = !data && !isLoading;

  return (
    <DashboardPartial>
      <C.ProductsContainer>
        {isLoading && <Loading/>}
        {content}
        {theresNoContent && (
          <C.WarningText>Não foram encontrados produtos...</C.WarningText>
        )}
      </C.ProductsContainer>
    </DashboardPartial>
  );
}
