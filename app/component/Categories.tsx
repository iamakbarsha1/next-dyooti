"use client";
import React from "react";

const Categories = () => {
  const categoryArr = [
    {
      id: 0,
      cateType: "fashion",
      cateName: "Men",
    },
    {
      id: 1,
      cateType: "fashion",
      cateName: "Women",
    },
    {
      id: 2,
      cateType: "grocery",
      cateName: "Grocery",
    },
  ];
  return (
    <main className="w-full p-3 flex items-center gap-5 border-b-[1px]">
      {categoryArr.map((cat) => {
        return (
          <div key={cat.id} className="font-semibold text-sm">
            {cat.cateName}
          </div>
        );
      })}
    </main>
  );
};

export default Categories;
