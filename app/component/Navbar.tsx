"use client";

import React, { useState, useEffect } from "react";
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
  // const [mounted, setMounted] = useState(false);
  const [openNavIndex, setOpenNavIndex] = useState<number | null>(null);

  // Handle hydration mismatch by only rendering after mount
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

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
          subHeader: "Optimize",
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

  // Don't render anything until after hydration
  // if (!mounted) {
  //   return null;
  // }

  return (
    <nav className="relative w-full py-4 px-10 flex items-center justify-between bg-red-100">
      <div>
        <Image
          alt="logo"
          src="/assets/logo/logo.png"
          width={100}
          height={50}
          priority
        />
      </div>
      <div className="flex items-center gap-10">
        {navContent.map((nav, index) => (
          <div key={nav.navName} className="relative">
            <button
              className="flex items-center justify-center gap-2 hover:opacity-80"
              onClick={() =>
                setOpenNavIndex(openNavIndex === index ? null : index)
              }
              aria-expanded={openNavIndex === index}
              type="button"
            >
              <span className="text-sm">{nav.navName}</span>
              {nav.showChevron && (
                <span
                  className={`transform transition-transform ${
                    openNavIndex === index ? "rotate-180" : ""
                  }`}
                >
                  {nav.iconComponent}
                </span>
              )}
            </button>

            {openNavIndex === index && nav.navChild.length > 0 && (
              // && mounted
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
                {nav.navChild.map((childNav) => (
                  <div
                    key={childNav.subHeader}
                    className="p-3 hover:bg-gray-50 rounded-md"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {childNav.navChild_iconComponent}
                      <h3 className="font-medium">{childNav.subHeader}</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      {childNav.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
// "use client"; // Ensure this component is treated as client-side only

// import React from "react"; // Import useState for interactivity
// import Image from "next/image";
// import { GridElement3O } from "lovedicons/dist/gridO";
// import { BusPresentionChartO } from "lovedicons/dist/busO";
// import { SecuSecurityUserO } from "lovedicons/dist/secuO";
// import { DesiLifebuoyO } from "lovedicons/dist/desiO";
// import { ArrChevronDownO } from "lovedicons/dist/arrO";

// interface NavChild {
//   header: string;
//   subHeader: string;
//   navChild_iconComponent: React.JSX.Element;
//   description: string;
// }

// interface NavContent {
//   navName: string;
//   navLink: string;
//   showChevron: boolean;
//   iconComponent: React.JSX.Element;
//   navChild: NavChild[];
// }

// const Navbar = () => {
//   // Static navContent; no need to change between SSR and client-side render
//   const navContent: NavContent[] = [
//     {
//       navName: "What We Do",
//       navLink: "",
//       showChevron: true,
//       iconComponent: <ArrChevronDownO className="w-4 h-4" />,
//       navChild: [
//         {
//           header: "ServiceNow",
//           subHeader: "Consult",
//           navChild_iconComponent: <GridElement3O className="w-5 h-5" />,
//           description:
//             "Aligning objectives and approaches for process optimization",
//         },
//         {
//           header: "ServiceNow",
//           subHeader: "Implement",
//           navChild_iconComponent: <BusPresentionChartO className="w-5 h-5" />,
//           description:
//             "Implementing swift resolutions of complex customer issues",
//         },
//         {
//           header: "ServiceNow",
//           subHeader: "Support",
//           navChild_iconComponent: <SecuSecurityUserO className="w-5 h-5" />,
//           description:
//             "High-performance standards guaranteed through the support and stability of robust IT solutions",
//         },
//         {
//           header: "ServiceNow",
//           subHeader: "Optimize",
//           navChild_iconComponent: <DesiLifebuoyO className="w-5 h-5" />,
//           description:
//             "Develop a strategic roadmap to optimize your ServiceNow environment for enhanced efficiency",
//         },
//       ],
//     },
//     {
//       navName: "Who Are We",
//       navLink: "",
//       showChevron: true,
//       iconComponent: <ArrChevronDownO className="w-4 h-4" />,
//       navChild: [],
//     },
//     {
//       navName: "Resources",
//       navLink: "",
//       showChevron: true,
//       iconComponent: <ArrChevronDownO className="w-4 h-4" />,
//       navChild: [],
//     },
//     {
//       navName: "Contact",
//       navLink: "",
//       showChevron: false,
//       iconComponent: <ArrChevronDownO className="w-4 h-4" />,
//       navChild: [],
//     },
//   ];

//   return (
//     <main className="relative w-full py-4 px-10 flex items-center justify-between bg-red-100">
//       <section>
//         <Image alt="logo" src="/assets/logo/logo.png" width={100} height={50} />
//       </section>
//       <section className="flex items-center gap-10">
//         {/* Render navContent without dynamic state */}
//         {navContent?.map((nav, i) => (
//           <section key={nav.navName}>
//             <div className="flex items-center justify-center gap-2">
//               <div className="text-sm">{nav.navName}</div>
//               {nav.showChevron && <div>{nav.iconComponent}</div>}
//             </div>
//             {/* Assuming no dynamic state, no mismatch */}
//             <section className="absolute left-0 -bottom-[72px] w-full bg-cyan-200">
//               <div className="text-primary">{nav.navChild[i]?.header}</div>
//               {/* Render child nav items */}
//               {nav.navChild.map((childNav, idx) => (
//                 <section key={childNav.subHeader}>
//                   <div>{childNav.subHeader}</div>
//                 </section>
//               ))}
//             </section>
//           </section>
//         ))}
//       </section>
//     </main>
//   );
// };

// export default Navbar;
