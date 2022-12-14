import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import DashboardLogin from "../pages/DashboardLogin/index";
import Home from "../pages/Home";
import ProductDetails from '../pages/ProductDetails/index';

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product-details/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/dashboard/login" element={<DashboardLogin />} />
      <Route path="*" element={<Navigate to='/'/>} />
    </Routes>
  );
}
