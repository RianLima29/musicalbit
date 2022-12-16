import React from "react";
import Header from "../../components/Header";
import * as C from "./styles";
import ProductCard from "../../components/ProductCard";
import Carousel from "../../components/Carousel";
import { useGetProductsQuery } from "../../redux/api/apiSlice";
import { Product } from "../../types/product";
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading";

export default function Home() {
  const { data, isLoading, isError } = useGetProductsQuery();
  let allProducts;

  allProducts = data?.map((item: Product, index) => (
    <ProductCard key={index} product={item} />
  ));

  return (
    <>
      <Header />
      <C.BannerContainer>
        <C.BannerTitle>INSTRUMENTOS</C.BannerTitle>
        <C.BannerSubtitle>
          BLACK <span>FRIDAY</span>
        </C.BannerSubtitle>
      </C.BannerContainer>
      <Carousel contentWidth="200px">{allProducts}</Carousel>
    </>
  );
}
