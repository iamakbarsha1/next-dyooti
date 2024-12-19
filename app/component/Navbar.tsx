"use client";
import React from "react";
import { CompHeartO } from "lovedicons/dist/compO";
import Image from "next/image";
// import Image from "next/image";
import { GridElement3O } from "lovedicons/dist/gridO";
import { BusPresentionChartO } from "lovedicons/dist/busO";
import { SecuSecurityUserO } from "lovedicons/dist/secuO";
import { DesiLifebuoyO } from "lovedicons/dist/desiO";
import { ArrChevronDownO } from "lovedicons/dist/arrO";

const Navbar = () => {
  const navContent = [
    {
      navName: "What We Do",
      navLink: "",
      showChevron: true,
      iconComponent: <ArrChevronDownO className="w-4 h-4" />,
      navChild: [
        {
          header: "ServiceNow",
          subHeader: "Consult",
          navChild_iconComponent: <GridElement3O className="w-5 h-5" />,
          description:
            "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
          header: "ServiceNow",
          subHeader: "Implement",
          navChild_iconComponent: <BusPresentionChartO className="w-5 h-5" />,
          description:
            "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
          header: "ServiceNow",
          subHeader: "Support",
          navChild_iconComponent: <SecuSecurityUserO className="w-5 h-5" />,
          description:
            "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
          header: "ServiceNow",
          subHeader: "Optmise",
          navChild_iconComponent: <DesiLifebuoyO className="w-5 h-5" />,
          description:
            "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },
      ],
    },
    {
      navName: "Who Are We",
      navLink: "",
      showChevron: true,
      iconComponent: <ArrChevronDownO className="w-4 h-4" />,
      navChild: [],
    },
    {
      navName: "Resources",
      navLink: "",
      showChevron: true,
      iconComponent: <ArrChevronDownO className="w-4 h-4" />,
      navChild: [],
    },
    {
      navName: "Contact",
      navLink: "",
      showChevron: false,
      iconComponent: <ArrChevronDownO className="w-4 h-4" />,
      navChild: [],
    },
  ];

  return (
    <main className="relative w-full py-4 px-10 flex items-center justify-between bg-red-100">
      <section>
        <Image alt="logo" src="/assets/logo/logo.png" width={100} height={50} />
      </section>
      <section className="flex items-center gap-10">
        {navContent?.map((nav, i) => {
          return (
            <section key={nav?.navName}>
              <div className="flex items-center justify-center gap-2">
                <div className="text-sm">{nav?.navName}</div>
                {nav?.showChevron ? <div>{nav?.iconComponent}</div> : null}
              </div>
              <section className="absolute left-0 -bottom-12 w-full bg-cyan-200">
                <div className="text-primary">{nav?.navChild[i]?.header}</div>
                <section className="">
                  <div className="flex items-center">
                    <div>{nav?.navChild[i]?.navChild_iconComponent}</div>
                    <div>{nav?.navChild[i]?.subHeader}</div>
                  </div>
                  <div>{nav?.navChild[i]?.description}</div>
                </section>
              </section>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default Navbar;
