"use client";

import React from "react";
import Image from "next/image";
import { GridElement3O } from "lovedicons/dist/gridO";
import { BusPresentionChartO } from "lovedicons/dist/busO";
import { SecuSecurityUserO, SecuEyeO } from "lovedicons/dist/secuO";
import { DesiLifebuoyO } from "lovedicons/dist/desiO";
import { ArrChevronDownO } from "lovedicons/dist/arrO";
import { EducBrifecaseTickO } from "lovedicons/dist/educO";
import { DesiShapesO } from "lovedicons/dist/desiO";
import { UserPeopleO } from "lovedicons/dist/userO";
import { MediaMicrophone2O, MediaVideoSquareO } from "lovedicons/dist/mediaO";
import { EducTeacherO, EducBookO, EducClipboardO } from "lovedicons/dist/educO";
import { EsseMenuO } from "lovedicons/dist/esseO";
import Logo from "./Logo";

interface NavbarProps {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavChild {
  subHeader: string;
  navChild_iconComponent: React.JSX.Element;
  description: string;
}

interface NavContent {
  navName: string;
  navLink: string;
  showChevron: boolean;
  iconComponent: React.JSX.Element;
  header: string;
  navChild: NavChild[];
}

const Navbar: React.FC<NavbarProps> = ({ setShowSidebar }) => {
  // const [mounted, setMounted] = useState(false);
  // const [openNavIndex, setOpenNavIndex] = useState<number | null>(null);

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
      header: "ServiceNow",
      navChild: [
        {
          subHeader: "Consult",
          navChild_iconComponent: (
            <GridElement3O className="w-5 h-5 text-primary" />
          ),
          description:
            "Aligning objectives and approaches for process optimization",
        },
        {
          subHeader: "Implement",
          navChild_iconComponent: (
            <BusPresentionChartO className="w-5 h-5 text-primary" />
          ),
          description:
            "Implementing swift resolutions of complex customer issues",
        },
        {
          subHeader: "Support",
          navChild_iconComponent: (
            <SecuSecurityUserO className="w-5 h-5 text-primary" />
          ),
          description:
            "High-performance standards guaranteed through the support and stability of robust IT solutions",
        },
        {
          subHeader: "Optimize",
          navChild_iconComponent: (
            <DesiLifebuoyO className="w-5 h-5 text-primary" />
          ),
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
      header: "ServiceNow",
      navChild: [
        {
          subHeader: "About Dyooti",
          navChild_iconComponent: (
            <Image
              alt="logo"
              src="/assets/logo/icon-logo.svg"
              width={50}
              height={50}
              priority
            />
          ),
          description:
            "Dyooti is a leading ServiceNow Consulting & Implementation partner to help you leverage the capabilities of ServiceNow to elevate stakeholder experiences",
        },
        {
          subHeader: "Vision, Mission, And Inspiration",
          navChild_iconComponent: <SecuEyeO className="w-5 h-5 text-primary" />,
          description: "An inside look of what keeps us going",
        },
        {
          subHeader: "Meet The Team",
          navChild_iconComponent: (
            <EducBrifecaseTickO className="w-5 h-5 text-primary" />
          ),
          description: "Let us introduce our remarkable team",
        },
        {
          subHeader: "Culture [CATIE]",
          navChild_iconComponent: (
            <DesiShapesO className="w-5 h-5 text-primary" />
          ),
          description:
            "Our value system defines how we extend the best to our clients, employees and stakeholders",
        },
        {
          subHeader: "Careers",
          navChild_iconComponent: (
            <UserPeopleO className="w-5 h-5 text-primary" />
          ),
          description: "Become a ServiceNow leader of tomorrow, join us today",
        },
        {
          subHeader: "Dyooti Academy",
          navChild_iconComponent: (
            <EducTeacherO className="w-5 h-5 text-primary" />
          ),
          description:
            "Dyooti Academy hones the transformative potential of ServiceNow, dedicated to nurturing the next generation of ServiceNow experts",
        },
      ],
    },
    {
      navName: "Resources",
      navLink: "",
      showChevron: true,
      iconComponent: <ArrChevronDownO className="w-4 h-4" />,
      header: "ServiceNow",
      navChild: [
        {
          subHeader: "Focus",
          navChild_iconComponent: (
            <Image
              alt="logo"
              src="/assets/logo/icon-focus.svg"
              width={30}
              height={30}
              priority
            />
          ),
          description:
            "We are committed to delivering quality service to our clients through hand-on support",
        },
        {
          subHeader: "Case Studies",
          navChild_iconComponent: (
            <EducBookO className="w-5 h-5 text-primary" />
          ),
          description:
            "Real-world success stories to discover how our solutions transform businesses",
        },
        {
          subHeader: "Insights",
          navChild_iconComponent: (
            <EducClipboardO className="w-5 h-5 text-primary" />
          ),
          description:
            "Explore the world of Ideas through our engaging blogs on a variety of interesting topics",
        },
        {
          subHeader: "Podcasts",
          navChild_iconComponent: (
            <MediaMicrophone2O className="w-5 h-5 text-primary" />
          ),
          description:
            "Tune in for inspiring conversations and engaging stories on our Podcast",
        },
        {
          subHeader: "Webinars",
          navChild_iconComponent: (
            <MediaVideoSquareO className="w-5 h-5 text-primary" />
          ),
          description:
            "Plan, deliver, and track value & drive more customer value faster.",
        },
      ],
    },
    {
      navName: "Contact",
      navLink: "",
      showChevron: false,
      iconComponent: <ArrChevronDownO className="w-4 h-4" />,
      header: "ServiceNow",
      navChild: [],
    },
  ];

  // Don't render anything until after hydration
  // if (!mounted) {
  //   return null;
  // }

  return (
    <nav className="relative w-full flex items-center justify-between bg-white px-8 md:px-12 xl:px-40 py-2 lg:py-0 shadow-md">
      <Logo />
      {/* <div>
        <Image
          alt="logo"
          src="/assets/logo/logo.png"
          width={140}
          height={38}
          priority
        />
      </div> */}
      <div className="hidden lg:flex items-center gap-10">
        {navContent.map((nav) => (
          <section key={nav.navName} className="group p-5">
            <button
              className="py-[6px] lg:py-7 gap-2 flex items-center justify-center group-hover:text-primary"
              // onClick={() =>
              //   setOpenNavIndex(openNavIndex === index ? null : index)
              // }
              // aria-expanded={openNavIndex === index}
              type="button"
            >
              <span className="text-sm">{nav.navName}</span>
              {nav.showChevron && (
                <span
                  className={`transform transition-transform group-hover:rotate-180`}
                >
                  {nav.iconComponent}
                </span>
              )}

              {/* The below content will visible when the mouse hovered on the menu button */}
              {/* invisible group-hover:visible */}
              {nav?.navChild.length > 0 && (
                <main
                  className={`absolute bg-secondary invisible group-hover:visible left-0 top-full ${
                    nav.navName === navContent[0].navName ? "px-20" : "px-40"
                  } pt-20 pb-20 w-full text-start shadow-lg rounded-lg z-50`}
                >
                  {/* <div className="mb-2">{nav.header}</div> */}
                  <section
                    className={`grid ${
                      nav.navName === navContent[0].navName
                        ? "grid-cols-4"
                        : "grid-cols-3"
                    } gap-10`}
                  >
                    {nav.navChild.map((childNav) => (
                      <div
                        key={childNav.subHeader}
                        className="flex items-start justify-start rounded-md"
                      >
                        <div className="flex items-center p-2 mt-1">
                          {childNav.navChild_iconComponent}
                        </div>
                        <section className="p-2 flex flex-col items-start">
                          <div className="font-semibold text-base text-black">
                            {childNav.subHeader}
                          </div>
                          <div className="text-sm text-gray-600 text-start">
                            {childNav.description}
                          </div>
                        </section>
                      </div>
                    ))}
                  </section>
                </main>
              )}
            </button>

            {/* {openNavIndex === index && nav.navChild.length > 0 && (
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
            )} */}
          </section>
        ))}
      </div>
      <div className="hidden lg:block w-[100px] h-[50px]"></div>
      <div className="block lg:hidden" onClick={() => setShowSidebar(true)}>
        <EsseMenuO className="w-6 h-7" />
      </div>
    </nav>
  );
};

export default Navbar;
