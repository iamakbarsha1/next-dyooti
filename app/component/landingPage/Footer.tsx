import Image from "next/image";
import React from "react";
import Logo from "../Logo";

const Footer: React.FC = () => {
  const footerData_1 = [
    {
      header: "Company",
      data: [
        { name: "About Dyooti", link: "" },
        { name: "Vision, Mission and Inspiration", link: "" },
        { name: "Meet The Team", link: "" },
        { name: "Culture (CATIE)", link: "" },
        { name: "Careers", link: "" },
        { name: "Dyooti Academy", link: "" },
        { name: "Terms of Service", link: "" },
        { name: "Privacy Policy", link: "" },
      ],
    },
  ];

  const footerData_2 = [
    {
      header: "Services",
      data: [
        { name: "Consult", link: "" },
        { name: "Implement", link: "" },
        { name: "Support", link: "" },
        { name: "Optimize", link: "" },
      ],
    },
  ];

  return (
    <main className="p-5 md:px-7 md:py-5 lg:px-10 lg:py-6 grid lg:grid-cols-12">
      <section className="col-span-6">
        <Logo />
        <div className="mt-4 mb-8 md:mb-10 text-base">
          Dyooti is a ServiceNow Consulting & Implementation partner and
          Reseller partner that integrates transformative expertise with a
          customer-centric perspective.
        </div>
        <div className="flex">
          <Image
            className="object-cover"
            alt={"badge1"}
            src={"/assets/images/landingPage/badge1.svg"}
            width={140}
            height={140}
            sizes="(max-width: 768px) 92px, (max-width: 1024px) 128px, 160px"
          />
          <Image
            className="object-cover"
            alt={"badge2"}
            src={"/assets/images/landingPage/badge2.svg"}
            width={140}
            height={140}
            sizes="(max-width: 768px) 92px, (max-width: 1024px) 128px, 160px"
          />
        </div>
      </section>
      <section className="col-span-3">
        {footerData_1.map((_item, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-bold mb-2">{_item.header}</h4>
            <ul>
              {_item.data.map((_i, idx) => (
                <li key={idx} className="mb-1">
                  <a
                    href={_i.link}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {_i.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="col-span-3">
        {footerData_2.map((_item, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-bold mb-2">{_item.header}</h4>
            <ul>
              {_item.data.map((_i, idx) => (
                <li key={idx} className="mb-1">
                  <a
                    href={_i.link}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {_i.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Footer;
