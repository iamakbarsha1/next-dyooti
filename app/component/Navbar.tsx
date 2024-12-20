"use client"; // This will ensure this component is treated as client-side only

import React, { useEffect, useState } from "react"; // Import useState for interactivity
import Image from "next/image";
import { GridElement3O } from "lovedicons/dist/gridO";
import { BusPresentionChartO } from "lovedicons/dist/busO";
import { SecuSecurityUserO } from "lovedicons/dist/secuO";
import { DesiLifebuoyO } from "lovedicons/dist/desiO";
import { ArrChevronDownO } from "lovedicons/dist/arrO";

interface NavChild {
  header: string;
  subHeader: string;
  navChild_iconComponent: React.JSX.Element;
  description: string;
}

interface NavContent {
  navName: string;
  navLink: string;
  showChevron: boolean;
  iconComponent: React.JSX.Element;
  navChild: NavChild[];
}

const Navbar = () => {
  const navContent: NavContent[] = [
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
            "Aligning objectives and approaches for process optimization",
        },
        {
          header: "ServiceNow",
          subHeader: "Implement",
          navChild_iconComponent: <BusPresentionChartO className="w-5 h-5" />,
          description:
            "Implementing swift resolutions of complex customer issues",
        },
        {
          header: "ServiceNow",
          subHeader: "Support",
          navChild_iconComponent: <SecuSecurityUserO className="w-5 h-5" />,
          description:
            "High-performance standards guaranteed through the support and stability of robust IT solutions",
        },
        {
          header: "ServiceNow",
          subHeader: "Optmise",
          navChild_iconComponent: <DesiLifebuoyO className="w-5 h-5" />,
          description:
            "Develop a strategic roadmap to optimize your ServiceNow environment for enhanced efficiency",
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

  const [navData, setNavData] = useState<NavContent[]>([]); // Dynamically handle nav data

  useEffect(() => {
    setNavData(navContent);
  }, []);

  return (
    <main className="relative w-full py-4 px-10 flex items-center justify-between bg-red-100">
      <section>
        <Image alt="logo" src="/assets/logo/logo.png" width={100} height={50} />
      </section>
      <section className="flex items-center gap-10">
        {navData?.map((nav, i) => {
          return (
            <section key={nav?.navName}>
              <div className="flex items-center justify-center gap-2">
                <div className="text-sm">{nav?.navName}</div>
                {nav?.showChevron ? <div>{nav?.iconComponent}</div> : null}
              </div>
              <section className="absolute left-0 -bottom-[72px] w-full bg-cyan-200">
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
