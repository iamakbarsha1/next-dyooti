import React, { useState } from "react";
import Logo from "./Logo";
import { EsseCloseCircleO } from "lovedicons/dist/esseO";
import { ArrChevronDownO } from "lovedicons/dist/arrO";

interface SidebarProps {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setShowSidebar }) => {
  interface NavChild {
    subHeader: string;
    link: string;
  }
  interface NavContent {
    navName: string;
    key: NavigateContentKey;
    navLink: string;
    showChevron: boolean;
    iconComponent: React.JSX.Element;
    navChild: NavChild[];
  }

  type NavigateContentKey = "whatWeDo" | "whoWeAre" | "resources" | "contact";

  const [showNavigateContent, setShowNavigateContent] = useState<
    Record<"whatWeDo" | "whoWeAre" | "resources" | "contact", boolean>
  >({
    whatWeDo: false,
    whoWeAre: false,
    resources: false,
    contact: false,
  });

  //   const handleShowNavigateContent = (key: NavigateContentKey) => {
  const handleShowNavigateContent = (key: keyof typeof showNavigateContent) => {
    setShowNavigateContent((prev) => {
      const updatedState = Object.keys(prev).reduce((acc, currKey) => {
        acc[currKey as keyof typeof prev] =
          currKey === key ? !prev[key] : false;
        return acc;
      }, {} as typeof prev);
      return updatedState;
      //   ...prev,
      //   [key]: !prev[key], // Dynamically toggle the value for the specified key
    });
  };

  const navContent: NavContent[] = [
    {
      navName: "What We Do",
      key: "whatWeDo",
      navLink: "",
      showChevron: true,
      iconComponent: <ArrChevronDownO className="w-4 h-4" />,
      navChild: [
        {
          subHeader: "Consult",
          link: "",
        },

        {
          subHeader: "Implement",
          link: "",
        },
        {
          subHeader: "Support",
          link: "",
        },
        {
          subHeader: "Optimize",
          link: "",
        },
      ],
    },
    {
      navName: "Who Are We",
      key: "whoWeAre",
      navLink: "",
      showChevron: true,
      iconComponent: <ArrChevronDownO className="w-4 h-4" />,
      navChild: [
        {
          subHeader: "About Us",
          link: "",
        },

        {
          subHeader: "Vision & Mission",
          link: "",
        },
        {
          subHeader: "Meet The Team",
          link: "",
        },
        {
          subHeader: "Culture",
          link: "",
        },
        {
          subHeader: "Careers",
          link: "",
        },
        {
          subHeader: "Academy",
          link: "",
        },
      ],
    },
    {
      navName: "Resources",
      key: "resources",
      navLink: "",
      showChevron: true,
      iconComponent: <ArrChevronDownO className="w-4 h-4" />,
      navChild: [
        {
          subHeader: "Focus",
          link: "",
        },
        {
          subHeader: "Case Studies",
          link: "",
        },
        {
          subHeader: "Insights",
          link: "",
        },
      ],
    },
    {
      navName: "Contact",
      key: "contact",
      navLink: "",
      showChevron: false,
      iconComponent: <ArrChevronDownO className="w-4 h-4" />,
      navChild: [],
    },
  ];

  return (
    <main className="p-[30px] w-[300px] h-full">
      <section className="mb-5 flex items-center justify-between">
        <Logo />
        <button
          onClick={() => {
            setShowSidebar(false);
          }}
        >
          <EsseCloseCircleO className="w-6 h-7 text-black" />
        </button>
      </section>

      <main className="py-3">
        {navContent?.map((nav) => {
          return (
            <main key={nav?.navName} className="mb-5">
              <section className="flex items-center justify-between">
                <div className="text-lg font-extrabold">{nav?.navName}</div>
                {nav?.showChevron && (
                  <button
                    className={`transform transition-transform font-bold ${
                      showNavigateContent[nav?.key] && "rotate-180"
                    }`}
                    onClick={() => handleShowNavigateContent(nav?.key)}
                  >
                    {nav?.iconComponent}
                  </button>
                )}
              </section>

              {/* {showNavigateContent[nav?.key] && ( */}
              <section
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  showNavigateContent[nav?.key]
                    ? `max-h-52 opacity-100`
                    : `max-h-0 opacity-0`
                }`}
              >
                {/* <section
                className={`pt-4 mb-1 overflow-hidden transition-all duration-500 ease-in-out ${
                  showNavigateContent[nav?.key] ? `h-full block` : `h-0 hidden`
                }`}
              > */}
                <section className="pt-4 mb-1 ">
                  {nav?.navChild.map((childNav) => {
                    return (
                      <div
                        key={childNav?.subHeader}
                        className="pl-4 py-2 text-base"
                      >
                        {childNav?.subHeader}
                      </div>
                    );
                  })}
                </section>
              </section>
              {/* )} */}
            </main>
          );
        })}
      </main>
    </main>
  );
};

export default Sidebar;
