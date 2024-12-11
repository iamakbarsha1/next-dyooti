import React from "react";
import { ArrChevronRightO } from "lovedicons/dist/arrO";

const Breadcrumb = () => {
  const breadcrumbArr = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Shoes",
      url: "/productCategroy",
    },
    {
      name: "Reebok Shoe",
      url: "/product/product_id",
    },
  ];
  return (
    <main className="w-full p-3 flex items-center gap-2 border-b-[1px]">
      {breadcrumbArr.map((breadCrum, index) => {
        return (
          <div
            key={breadCrum.name}
            className="flex items-center justify-center font-semibold text-sm"
          >
            <span className="mr-1">{breadCrum.name} </span>
            {index !== breadcrumbArr.length - 1 && (
              <span className="">
                <ArrChevronRightO />
              </span>
            )}
          </div>
        );
      })}
    </main>
  );
};

export default Breadcrumb;
