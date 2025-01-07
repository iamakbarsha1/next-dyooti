import Image from "next/image";
import React from "react";
import { EsseTickCircleS } from "lovedicons/dist/esseS";
import RequestAQuote from "../component/landingPage/RequestAQuote";
import NewsLetter from "../component/landingPage/NewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consult",
};
const Consult = () => {
  //   interface Points {
  //     points: Array<string>;
  //   }
  interface ConsultData {
    header: string;
    image: string;
    subHeader: string;
    points: string[];
  }
  const consultData: ConsultData[] = [
    {
      header: "Align",
      image: "/assets/images/consult-align.png",
      subHeader:
        "Harmonizing Objectives And Tactics To Achieve A Smooth Process And Synergies Within ServiceNow",
      points: [
        "We assess the alignment of technology with the business strategy and establish essential objectives to assess synergies.",
        "Our collaboration extends to key stakeholders, business users, and technical resources, ensuring that the outcomes cater to all organizational levels.",
        "By jointly defining crucial objectives and synergies, we initiate the digital transformation journey for organizations, encompassing Telecom, Manufacturing, IT Operations, Financial Services, and Heavy Industries.",
        "Clients benefit from industry insights and ServiceNow’s best practices, optimizing results as both the platform and their business continue to evolve.",
      ],
    },
    {
      header: "Analyze",
      image: "/assets/images/consult-analyze.png",
      subHeader:
        "Dissect And Elucidate The Interdependencies Among The ServiceNow Implementation And It’s Constituent Elements",
      points: [
        "Through an evaluation of the existing technology landscape and a comprehensive understanding of current and future IT initiatives, we enhance our ability to assist clients in crafting metrics to gauge the success of their new implementations.",
        "Our expertise lies in helping clients comprehend their existing toolsets, facilitating seamless integration with broader IT operations management, and delivering advanced ITSM as well as non-ITSM functionalities.",
        "By analyzing user patterns and behaviors, we innovate new systems that promote smooth workflow experiences. Our approach prioritizes the user and client needs, tailoring solutions to observed patterns and behaviors, thus enabling us to explore and achieve the best possible outcomes.",
      ],
    },
    {
      header: "Assess",
      subHeader:
        "Examine The Limitations, Presenting Both Advantages And Disadvantages Of The ServiceNow Implementation",
      image: "/assets/images/consult-assess.png",
      points: [
        "To assess the performance of your organization, we conduct thorough examinations involving a diverse network of resources, including external partners and geographically dispersed teams. This step is vital to ensure a comprehensive understanding of the overall health status of your instance.",
        "Our role extends to pinpointing and rectifying technical shortcomings while providing holistic 360-degree recommendations to enhance your instance configuration. Clients benefit from this process by gaining insights into the factors impeding optimal performance, as we evaluate instances against a range of best practices.",
        "This often leads to a reduction in unnecessary customizations, enabling a return to out-of-the-box functionality and a simplification of complexities. We also identify areas for improvement, organizational obstacles, and systemic weaknesses, helping clients surmount both technical and organizational challenges that may lie ahead.",
        "Our approach involves conducting cognitive walkthroughs using interactive prototypes to solicit feedback on usability, undergo development reviews, and engage in discussions with architects.",
      ],
    },
    {
      header: "Advice",
      subHeader:
        "Formulating Top-Level Implementation Tasks And Milestones To Maximize ServiceNow ROI",
      image: "/assets/images/consult-advice.png",
      points: [
        "We play a pivotal role in crafting roadmaps that bridge the divide between architecture, data strategy, and instance strategy. This approach is instrumental in aligning client objectives with transformational outcomes, streamlining the path to success.",
        "Throughout the project lifecycle, we implement change management methodologies to ensure smooth transitions and adoption of changes.",
        "Our team of experts assists clients in establishing best practices right from the project’s inception, alongside a clear communication strategy to set expectations for anticipated outcomes.",
        "We also provide recommendations and comprehensive documentation of critical areas for improvement, aiding in the development of high-level tasks and milestones for implementation. This proactive approach to organizational change management contributes to an overall enhancement of ServiceNow ROI.",
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
                Consult
              </div>
              <div className="mt-5 mb-6 md:mb-20 lg:mb-40 xl:mb-36 text-[20px] md:text-2xl">
                To consult and evaluate the congruence between technology and
                the business strategy, setting vital goals to gauge synergies.
              </div>
            </div>
          </div>
        </div>
        <Image
          alt="consult-hero"
          src={"/assets/images/consult-hero.png"}
          priority={true}
          fill={true}
          className="object-contain object-top md:object-cover md:object-center"
        />
      </section>
      <section className="">
        {consultData?.map((_data, index) => {
          return (
            <main
              //   className="px-8 md:px-12 xl:px-40 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 odd:bg-white even:bg-secondary" odd:lg:flex-row even:flex-row-reverse
              //   className="px-8 md:px-12 xl:px-40 py-12 md:py-24 flex items-center justify-center flex-col lg:flex-row md:even:flex-row-reverse odd:bg-white even:bg-secondary"
              //   className={`px-8 md:px-12 xl:px-40 py-12 md:py-24 flex items-center justify-center flex-col md:flex-row ${
              //     index % 2 === 0
              //       ? "odd:bg-white md:flex-row-reverse"
              //       : "even:bg-secondary"
              //   }`}
              className={`px-8 md:px-12 xl:px-40 py-12 md:py-24 flex items-center justify-center flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } ${index % 2 === 0 ? "odd:bg-white" : "even:bg-secondary"}`}
              key={_data.header}
            >
              {/* odd:ml-11 even:mr-11 */}
              <section
                className={` ${
                  index % 2 === 0 ? "ml-11" : "mr-11"
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
              <section className="w-full">
                <div className="text-4xl font-gilroy font-bold">
                  {_data.header}
                </div>
                <div className="text-2xl mt-4 mb-6">{_data.subHeader}</div>
                <section className="flex flex-col items-start">
                  {_data.points.map((points) => {
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
            </main>
          );
        })}
      </section>
      <RequestAQuote />
      <NewsLetter />
    </main>
  );
};

export default Consult;
