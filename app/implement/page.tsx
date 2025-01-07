import Image from "next/image";
import React from "react";
import { EsseTickCircleS } from "lovedicons/dist/esseS";
import RequestAQuote from "../component/landingPage/RequestAQuote";
import NewsLetter from "../component/landingPage/NewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Implement",
};

interface keyBenefits {
  heading: string;
  answer: string;
}
interface ImplementItem {
  shortTerm: string;
  fullForm: string;
  image: string;
  points: string[];
  keyBenefits: keyBenefits[];
}
interface ImplementData {
  category: string;
  data: ImplementItem[];
}

const Implement = () => {
  const implementData: ImplementData[] = [
    {
      category: "Customer Workflows",
      data: [
        {
          shortTerm: "CSM",
          fullForm: "Customer Service Management",
          image: "/assets/images/consult-align.png",
          points: [
            "Dyooti provides clients with a solution to elevate customer satisfaction and loyalty by implementing extensive enhancements in customer engagement, service operations, and agent productivity, all of which involve eradicating manual errors and integrating previously disconnected processes.",
            "A phased approach empowers clients to innovate their customer connections and engagement strategies. They can realize new efficiencies through automation and proactive support management, leading to swift resolutions of complex customer issues by seamlessly integrating telephony systems to support customers across multiple channels.",
            "Furthermore, Dyooti encourages self-service adoption through the utilization of Knowledge Management, Service Catalogs, Service Portals, and more.",
          ],
          keyBenefits: [
            {
              heading: "Elevated Customer Satisfaction and Productivity",
              answer:
                "Dyooti provides customer agents with a unified workspace that consolidates customer data, communication channels, and essential tools, facilitating quick and effective resolution of customer issues.",
            },
            {
              heading: "Enhanced Insights for Improved Outcomes",
              answer:
                "Real-time visibility into customer interactions and issues is offered, alongside the capacity to analyze customer feedback, and identify trends, and patterns. This data-driven approach enables proactive decision-making.",
            },
            {
              heading: "Automation and Enhanced Operational Efficiency",
              answer:
                "Key customer service processes are automated, reducing manual tasks and creating streamlined workflows. This leads to improved operational efficiency and a reduction in customer service costs.",
            },
          ],
        },
        {
          shortTerm: "",
          fullForm: "",
          image: "/assets/images/consult-align.png",
          points: ["", ""],
          keyBenefits: [
            {
              heading: "",
              answer: "",
            },
          ],
        },
      ],
    },
    {
      category: "",
      data: [
        {
          shortTerm: "",
          fullForm: "",
          image: "/assets/images/consult-align.png",
          points: ["", ""],
          keyBenefits: [
            {
              heading: "",
              answer: "",
            },
          ],
        },
      ],
    },
  ];
  return (
    <main className=" w-screen flex flex-col">
      <section className="relative h-[400px] md:h-[500px] lg:h-[650px] xl:h-[900px] w-full ">
        <div className="absolute z-30 top-0 right-0 left-0 h-full flex items-center justify-center">
          <div className="relative h-full flex items-center justify-center text-black text-center">
            <div className="pt-20 md:pt-10 px-10 w-full h-full max-w-[950px] flex flex-col items-center justify-between">
              <div className="text-[50px] lg:text-8xl font-gilroyLight">
                <span className="text-black font-gilroyBold">Dyooti</span>{" "}
                <br className="md:hidden" />
                Implement
              </div>
              <div className="mt-5 mb-6 md:mb-20 lg:mb-40 xl:mb-36 text-[20px] md:text-2xl">
                To meet the organization’s specific needs and goals, the
                implementation encompasses the design, customization, and
                deployment of ServiceNow modules and applications.
              </div>
            </div>
          </div>
        </div>
        <Image
          alt="consult-hero"
          src={"/assets/images/imp-hero.png"}
          priority={true}
          fill={true}
          className="object-contain object-top md:object-cover md:object-center"
        />
      </section>
      <section className="">
        {implementData?.map((_data, index) => {
          return (
            <main
              className={`px-8 md:px-12 xl:px-40 py-12 md:py-24 flex items-center justify-center flex-col odd:bg-white even:bg-secondary`}
              key={_data.category}
            >
              <section className="mb-8 md:mb-10 w-full flex items-start text-[28px] md:text-[32px] text-custBlue uppercase">
                {_data.category}
              </section>
              {_data.data?.map((_content) => {
                return (
                  <main key={_content.shortTerm}>
                    <main className="flex flex-col lg:flex-row">
                      <section className="w-full">
                        <div className="text-4xl font-gilroy font-bold">
                          {_content.shortTerm}
                        </div>
                        <div className="text-2xl mt-4 mb-6">
                          {_content.fullForm}
                        </div>
                        <section className="flex flex-col items-start">
                          {_content.points.map((points) => {
                            return (
                              <div key={points} className="flex pb-4">
                                <div className="flex items-start justify-center">
                                  <EsseTickCircleS className="w-5 lg:w-6 h-5 lg:h-6 text-primary" />
                                </div>
                                <div className="pl-4 text-[20px]">{points}</div>
                              </div>
                            );
                          })}
                        </section>
                      </section>
                      <section
                        className={` ${
                          index % 2 === 0 ? "ml-11" : "mr-11"
                        } w-full h-full flex items-center justify-center`}
                      >
                        <Image
                          alt="landingPageHero"
                          src={_content.image}
                          //   priority={true}
                          //   fill={true}
                          width={280}
                          height={280}
                          className="md:w-full md:h-full object-contain object-center"
                        />
                      </section>
                    </main>
                    <section className="mt-8 md:mt-10 lg:mt-12 p-5 md:p-8 lg:p-10 bg-secondary rounded-[20px]">
                      <div className="pb-6 md:pb-10 text-2xl lg:text-4xl font-gilroy font-bold">
                        Key benefits include
                      </div>
                      <section className="">
                        {_content.keyBenefits?.map((_benefits) => {
                          return (
                            <div
                              key={_benefits.heading}
                              className="text-base md:text-[20px]"
                            >
                              .{" "}
                              <span className="font-gilroy font-bold">
                                {_benefits.heading}:
                              </span>{" "}
                              {_benefits.answer}{" "}
                            </div>
                          );
                        })}
                      </section>
                    </section>
                  </main>
                );
              })}
            </main>
          );
        })}
      </section>
      <RequestAQuote />
      <NewsLetter />
    </main>
  );
};

export default Implement;
