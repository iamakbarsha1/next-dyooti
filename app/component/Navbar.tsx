"use client";
import React, { useState } from "react";
import { ShopShoppingCartO } from "lovedicons/dist/shopO";
import { SearSearchFavoriteO } from "lovedicons/dist/searO";
import { CompHeartO } from "lovedicons/dist/compO";
import Image from "next/image";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const navIcons = [
    {
      iconName: "Cart",
      iconLink: "",
      iconComponent: <ShopShoppingCartO className="w-5 h-5" />,
      addOns: "",
    },
    {
      iconName: "Favourites",
      iconLink: "",
      iconComponent: <CompHeartO className="w-5 h-5" />,
      addOns: "",
    },
  ];

  return (
    <main className="w-full p-4 flex items-center justify-evenly">
      <section>logo</section>
      <section className="relative flex items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-2.5 py-2 w-80 text-sm rounded-md outline-none"
          placeholder="Search a Product"
        />
        {/* <div className=""> */}
        <SearSearchFavoriteO className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        {/* </div> */}
      </section>
      <section className="flex gap-7">
        {navIcons.map((icon) => {
          return (
            <div key={icon.iconName} className="flex flex-col items-center">
              <div>{icon.iconComponent}</div>
              <div className="text-xs mt-1">{icon.iconName}</div>
            </div>
          );
        })}
        <div>
          <Image src={""} width={50} height={50} />
        </div>
      </section>
    </main>
  );
};

export default Navbar;
