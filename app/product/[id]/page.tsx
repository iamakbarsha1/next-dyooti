"use client";
import Breadcrumb from "@/app/component/Breadcrumb";
import ProductDetails from "@/app/component/ProductDetails";
import React from "react";

const Product = () => {
  return (
    <main className="h-full w-full bg-cyan-200">
      <Breadcrumb />
      <ProductDetails />
    </main>
  );
};

export default Product;
