import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Shop } from "../pages/Shop";
import { SingleProduct } from "../components/SingleProduct";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/single" element={<SingleProduct />} />
    </Routes>
  );
};
