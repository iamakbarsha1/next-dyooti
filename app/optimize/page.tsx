import Image from "next/image";
import React from "react";
import { EsseTickCircleS } from "lovedicons/dist/esseS";
import RequestAQuote from "../component/landingPage/RequestAQuote";
import NewsLetter from "../component/landingPage/NewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
};

interface keyBenefits {
  heading: string;
  answer: string;
}
interface OptimizeData {
  header: string;
  image: string;
  points: (string | keyBenefits | string[])[]; // Allow strings and objects in the array
  keyBenefits: keyBenefits[];
}

const Optimize = () => {
  const supportData: OptimizeData[] = [
    {
      header: "Overhauling Systems",
      image: "/assets/images/opt-over.png",
      points: [
        "ServiceNow Re-Implementation can be challenging due to inaccurate assessment, unnecessary customizations, failure to relate to higher business objectives, complex workflows, too many integrations, obsolete processes, impact on stakeholders, and lack of a skilled implementation team.",
        "Therefore, by leveraging our deep expertise and industry best practices, we analyze your current implementation, identify areas for improvement, and develop a strategic roadmap to optimize your ServiceNow environment.",
        "Our ServiceNow Re-Implementation services cover:",
        [
          "Platform implementation from scratch.",
          "Enhancement of your existing platform’s functionality.",
          "Integrations (e.g., with IT infrastructure management tools, email services, CRM systems).",
          "Migration projects (from basic-functionality ticketing tools or legacy ITSM systems).",
        ],
      ],
      keyBenefits: [],
    },
    {
      header: "License Evaluation",
      image: "/assets/images/opt-le.png",
      points: [
        "Many ServiceNow customers struggle with underutilized licenses, resulting in wasted resources and unnecessary expenses.",
        "Therefore, we delve deep into your license agreements, usage patterns, and business requirements to provide tailored recommendations that align with your goals.",
        "By uncovering unused or underutilized licenses, we help you:",
        [
          "Eliminate Unnecessary Costs.",
          "Reallocate Resources Effectively.",
          "Stay Ahead of Audits.",
          "Mitigate Risks and Drive Operational Efficiency.",
        ],
      ],
      keyBenefits: [],
    },
    {
      header: "Boosting Operational Performance",
      image: "/assets/images/opt-bop.png",
      points: [
        "A sluggish ServiceNow platform can hinder your organization’s productivity and impede service delivery. Our ServiceNow performance improvement services address these challenges head-on, empowering your business with optimized platform performance.",
        "With our in-depth knowledge of ServiceNow’s architecture and performance best practices, we analyze your existing setup to identify areas for improvement",
        [
          "Fine-tune Configurations.",
          "Optimize Database Performance.",
          "Streamline Workflows.",
          "Implement Caching Strategies.",
        ],
      ],
      keyBenefits: [],
    },
    {
      header: "Strategic Future Planning",
      image: "/assets/images/opt-sfp.png",
      points: [
        "We understand the criticality of timely issue resolution. Our team of experienced professionals is equipped with the expertise to tackle a wide range of ServiceNow problems.",
        "From troubleshooting configuration errors to enhancing system performance, we prioritize delivering quick and effective solutions.",
        "Our streamlined approach ensures minimal disruptions to your operations, allowing you to maximize productivity. We can help you with:",
        [
          "Configuration Errors and Performance Bottlenecks.",
          "Integration Challenges, Data Inconsistencies.",
          "Workflow Optimization.",
        ],
      ],
      keyBenefits: [],
    },
  ];
  return (
    <main className=" w-screen flex flex-col">
      <section className="relative h-[400px] md:h-[500px] lg:h-[650px] xl:h-[900px] w-full">
        <div className="absolute z-30 top-0 right-0 left-0 h-full flex items-center justify-center">
          <div className="relative h-full flex items-center justify-center text-black text-center">
            <div className="pt-20 md:pt-10 px-10 w-full h-full max-w-[950px] flex flex-col items-center justify-between">
              <div className="text-[50px] lg:text-8xl font-gilroyLight">
                <span className="text-black font-gilroyBold">Dyooti</span>{" "}
                <br className="md:hidden" />
                Optimize
              </div>
              <div className="mt-5 mb-6 md:mb-20 lg:mb-40 xl:mb-36 text-[20px] md:text-2xl">
                To otimize processes by automating tasks, and customizing
                ServiceNow applications to align with specific business
                requirements.
              </div>
            </div>
          </div>
        </div>
        <Image
          alt="opt-hero"
          src={"/assets/images/opt-hero.svg"}
          priority={true}
          fill={true}
          className="object-contain object-top md:object-cover md:object-center"
        />
      </section>
      <section className="">
        {supportData?.map((_data, index) => {
          return (
            <main
              key={_data?.header}
              className="px-8 md:px-12 xl:px-40 py-12 md:py-24 odd:bg-white even:bg-secondary tracking-wide"
            >
              <main
                className={`flex flex-col lg:flex-row items-center justify-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <section className="w-full">
                  <div className="mb-6 text-4xl font-gilroy font-bold">
                    {_data?.header}
                  </div>
                  <section className="flex flex-col items-start">
                    {/* {_data?.points?.map((point, i) => {
                      if (Array.isArray(point)) {
                        // Handle nested array of strings
                        return (
                          <div key={`nested-array-${i}`} className="pl-4">
                            {point.map((subPoint, subIndex) => (
                              <div
                                key={`subpoint-${subIndex}`}
                                className="flex ml-[50px] md:ml-14 pb-4"
                              >
                                <div className="mr-2 mt-3 flex items-start justify-center">
                                  <div className="w-1 h-1 rounded-full bg-black inline-flex align-middle"></div>
                                </div>
                                <div className="text-base md:text-[20px] leading-normal">
                                  {subPoint}
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      } else {
                        // Handle string points
                        return (
                          <div key={`point-${i}`} className="flex pb-4">
                            {i === 0 &&
                            _data.header === "Overhauling Systems" ? null : (
                              <div className="mr-2 flex items-start justify-center">
                                <EsseTickCircleS className="w-5 lg:w-6 h-5 lg:h-6 text-primary" />
                              </div>
                            )}
                            <div
                              className={`${
                                i === 0 &&
                                _data.header === "Overhauling Systems"
                                  ? "pl-0"
                                  : "pl-4"
                              } 'text-base md:text-[20px] leading-normal`}
                            >
                              {point}
                            </div>
                          </div>
                        );
                      }
                    })} */}
                    {_data?.points?.map((point, i) => {
                      if (Array.isArray(point)) {
                        // Handle nested array of strings
                        return (
                          <div key={`nested-array-${i}`} className="pl-4">
                            {point.map((subPoint, subIndex) => (
                              <div
                                key={`subpoint-${subIndex}`}
                                className="flex ml-[50px] md:ml-14 pb-4"
                              >
                                <div className="mr-2 mt-3 flex items-start justify-center">
                                  <div className="w-1 h-1 rounded-full bg-black inline-flex align-middle"></div>
                                </div>
                                <div className="text-base md:text-[20px] leading-normal">
                                  {subPoint}
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      } else if (typeof point === "string") {
                        // Handle string points
                        return (
                          <div key={`point-${i}`} className="flex pb-4">
                            {i === 0 &&
                            _data.header === "Overhauling Systems" ? null : (
                              <div className="mr-2 flex items-start justify-center">
                                <EsseTickCircleS className="w-5 lg:w-6 h-5 lg:h-6 text-primary" />
                              </div>
                            )}
                            <div
                              className={`${
                                i === 0 &&
                                _data.header === "Overhauling Systems"
                                  ? "pl-0"
                                  : "pl-4"
                              } 'text-base md:text-[20px] leading-normal`}
                            >
                              {point}
                            </div>
                          </div>
                        );
                      } else if (
                        typeof point === "object" &&
                        "heading" in point &&
                        "answer" in point
                      ) {
                        // Handle keyBenefits object
                        return (
                          <div key={`keyBenefits-${i}`} className="flex pb-4">
                            <div className="font-gilroy font-bold">
                              {point.heading}: {point.answer}
                            </div>
                          </div>
                        );
                      }
                    })}
                  </section>

                  {/* Key Benefits Section */}
                  {_data.keyBenefits.length > 0 && (
                    <section className="mt-8 md:mt-10 lg:mt-12 p-5 md:p-8 lg:p-10 bg-secondary rounded-[20px]">
                      <div className="pb-6 md:pb-10 text-2xl lg:text-[32px] font-gilroy font-bold">
                        Key benefits include
                      </div>
                      <section>
                        {_data.keyBenefits.map((benefit, i) => (
                          <div
                            key={`benefit-${i}`}
                            className="mb-4 lg:mb-5 last:mb-0"
                          >
                            <div className="text-xl font-bold">
                              {benefit.heading}
                            </div>
                            <div className="text-base md:text-[20px] leading-normal">
                              {benefit.answer}
                            </div>
                          </div>
                        ))}
                      </section>
                    </section>
                  )}
                </section>
                <section
                  className={` ${
                    index % 2 === 0 ? "lg:ml-11" : "lg:mr-11"
                  } w-full h-full flex items-center justify-center`}
                >
                  <Image
                    alt="landingPageHero"
                    src={_data.image}
                    //   priority={true}
                    //   fill={true}
                    width={280}
                    height={280}
                    className="md:w-full md:h-full object-contain object-center"
                  />
                </section>
              </main>
              {_data.keyBenefits.length > 0 ? (
                <section className="mt-8 md:mt-10 lg:mt-12 p-5 md:p-8 lg:p-10 bg-secondary rounded-[20px]">
                  <div className="pb-6 md:pb-10 text-2xl lg:text-[32px] font-gilroy font-bold">
                    Key benefits include
                  </div>
                  <section className="">
                    {_data.keyBenefits?.map((_benefits) => {
                      return (
                        <div
                          key={_benefits?.heading}
                          className="w-full mb-4 lg:mb-5 last:mb-0 text-base md:text-[20px] leading-normal"
                        >
                          <span className="font-gilroy font-bold">
                            <div className="w-1 h-1 rounded-full bg-black inline-flex align-middle"></div>{" "}
                            {_benefits?.heading}:
                          </span>{" "}
                          {_benefits?.answer}{" "}
                        </div>
                      );
                    })}
                  </section>
                </section>
              ) : null}
            </main>
            // </main>
          );
        })}
      </section>
      <RequestAQuote />
      <NewsLetter />
    </main>
  );
};

export default Optimize;
