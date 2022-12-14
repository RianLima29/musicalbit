import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import DashboardHome from "../pages/DashboardHome";
import DashboardStock from "../pages/DashboardStock";
import DashboardAddProduct from "../pages/DashboardAddProduct";
import DashboardOrders from "../pages/DashboardOrders";
import DashboardEditProduct from "../pages/DashboardEditProduct";
import DashboardLogin from "../pages/DashboardLogin/index";
import PublicRoutes from "./PublicRoutes";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";

export default function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard/" element={<DashboardHome />} />
        <Route path="/dashboard/stock" element={<DashboardStock />} />
        <Route path="/dashboard/stock/:id" element={<DashboardEditProduct />} />
        <Route
          path="/dashboard/add-product"
          element={<DashboardAddProduct />}
        />
        <Route path="/dashboard/orders" element={<DashboardOrders />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
}
