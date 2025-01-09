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
interface SupportData {
  header: string;
  image: string;
  points: (string | keyBenefits)[]; // Allow strings and objects in the array
  keyBenefits: keyBenefits[];
}

const Support = () => {
  const supportData: SupportData[] = [
    {
      header: "Enhancement",
      image: "/assets/images/support-enc.png",
      points: [
        "By reducing system administration costs and expanding your team, you can focus your efforts on creating ServiceNow innovations that deliver substantial business benefits.",
        "Our services enable organizations to efficiently manage ServiceNow administration requests and effectively meet customer demands. This includes designing and customizing Self-Service pages to enhance user navigation and familiarity, among other enhancements.",
      ],
      keyBenefits: [],
    },
    {
      header: "Upgrade",
      image: "/assets/images/support-upg.png",
      points: [
        "With each new ServiceNow release, valuable functionality updates and significant platform additions are introduced. These require careful consideration to ensure a successful and precise upgrade. Our refined upgrade process goes beyond merely providing you with the latest application version of ServiceNow.",
        "Our team of ServiceNow experts assists your organization in preparing for the upgrade, offers best practices, and effectively implements and tests your instance to ensure a smooth transition and optimal utilization of the new features and capabilities.",
      ],
      keyBenefits: [],
    },
    {
      header: "Maintenance",
      image: "/assets/images/support-mai.png",
      points: [
        "We provide our customers with our specialized expertise in managing the ServiceNow platform, aiming to maximize the benefits and elevate the value it brings to your organization. Our dedicated team ensures that your service management application remains up-to-date, consistently incorporating the latest updates and enhancements.",
        "With our extensive experience in troubleshooting issues and establishing smooth connections, we facilitate the continuous development of ServiceNow. By relying on our support, internal resources are liberated to concentrate on core business activities and spearhead innovation within the organization, unburdened by routine maintenance concerns.",
        "The quality and availability of our services undergo enhancements, resulting in heightened satisfaction among both customers and users.",
        "Our services possess a scalable nature, affording flexible cost management, thereby optimizing expenditure and reducing time-to-market for your organization.",
      ],
      keyBenefits: [
        {
          heading: "Cost-Efficiencies",
          answer:
            "We implement industry best practices and cutting-edge tools to effectively curtail software application maintenance costs for your business. Our application management services align meticulously with the latest ITIL service management standards, employing state-of-the-art methodologies and tools to stay in step with evolving requirements. Through our comprehensive approach, we deliver complete visibility and control over all application support tasks, ensuring cost-effectiveness.",
        },
        {
          heading: "Enhanced Integrations",
          answer:
            "Drawing from our extensive experience in integrating ServiceNow applications with both other ServiceNow modules and a wide array of third-party tools, along with our specialized expertise in crafting custom integrations for enterprises, we are well-prepared to tackle integration challenges with precision and proficiency. Whether it pertains to ticketing systems, master data, processes, or user interfaces, we are well-equipped to navigate and surmount these integration complexities.",
        },
        {
          heading: "Application Lifecycle",
          answer:
            "We collaborate with clients to optimize the ServiceNow application lifecycle. By doing so, we establish a robust foundation for maximizing value, fostering growth, and achieving cost reductions. This empowers your organization to focus on strategic initiatives that yield tangible ROI, secure in the knowledge that your ServiceNow applications are in capable hands, guaranteeing their longevity and effectiveness.",
        },
      ],
    },
    {
      header: "User Adoption & Training",
      image: "/assets/images/support-uat.png",
      points: [
        "In the world of transformation initiatives, success or failure often pivots on one crucial factor: adoption. While it’s common to attribute setbacks to technology or talent shortcomings, a predominant cause of many failures is inadequate adoption.",
        "To steer clear of these obstacles, we extend a helping hand with our comprehensive ServiceNow training and adoption services. Our offerings encompass:",
        {
          heading: "Showcasing ServiceNow’s Potential",
          answer:
            "We emphasize how ServiceNow can streamline processes, enhance efficiency, and elevate the overall employee experience.",
        },
        {
          heading: "Tailored Training Programs",
          answer:
            "We provide all-encompassing training programs meticulously tailored to diverse user roles, catering to their specific needs. This ensures that every user can harness the full potential of ServiceNow.",
        },
        {
          heading: "Hands-On Learning",
          answer:
            "Our approach integrates hands-on training sessions, self-paced learning modules, and user-friendly guides. This multifaceted training strategy accommodates various learning preferences, empowering users to confidently navigate the ServiceNow platform.",
        },
        "By placing a premium on adoption through our training and adoption services, we significantly bolster the odds of your transformation initiatives attaining the success they rightfully deserve.",
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
                Support
              </div>
              <div className="mt-5 mb-6 md:mb-20 lg:mb-40 xl:mb-36 text-[20px] md:text-2xl">
                To ensure your platform remains efficient, secure, and aligned
                with the evolving needs of the business, our support teams
                assist organizations with incident resolution, service requests,
                and system updates.
              </div>
            </div>
          </div>
        </div>
        <Image
          alt="consult-hero"
          src={"/assets/images/support-hero.svg"}
          priority={true}
          fill={true}
          className="object-contain object-top md:object-cover md:object-center"
        />
      </section>
      <section className="">
        {supportData?.map((_data, index) => {
          return (
            // <main
            //   className={`py-12 md:py-24 flex items-center justify-center flex-col`}
            //   key={_data?.header}
            // >
            //   {/* <section className="px-8 md:px-12 xl:px-40 mb-8 md:mb-10 w-full flex items-start text-[28px] md:text-[32px] text-custBlue uppercase">
            //     {_data?.category}
            //   </section> */}
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
                      // if (Array.isArray(point)) {
                      //   // Handle nested points (array)
                      //   return (
                      //     <div
                      //       key={`nested-${i}`}
                      //       className="flex flex-col pb-4 pl-4"
                      //     >
                      //       {point.map((nestedPoint, j) => (
                      //         <div
                      //           key={`nested-point-${j}`}
                      //           className="flex pb-4"
                      //         >
                      //           <div className="mr-2 flex items-start justify-center">
                      //             <EsseTickCircleS className="w-5 lg:w-6 h-5 lg:h-6 text-primary" />
                      //           </div>
                      //           <div className="pl-4 last:pl-0 text-base md:text-[20px] leading-normal">
                      //             {typeof nestedPoint === "object" &&
                      //             nestedPoint.heading ? (
                      //               // Render nested object with heading and answer
                      //               <div>
                      //                 <span className="font-bold">
                      //                   {nestedPoint.heading}:
                      //                 </span>{" "}
                      //                 {nestedPoint.answer}
                      //               </div>
                      //             ) : (
                      //               // Render plain string
                      //               nestedPoint
                      //             )}
                      //           </div>
                      //         </div>
                      //       ))}
                      //     </div>
                      //   );
                      // } else
                      if (typeof point === "object" && point.heading) {
                        // Handle single object with heading and answer
                        return (
                          <div key={`point-${i}`} className="flex pb-4">
                            <div className="ml-14 md:ml-20 text-base md:text-[20px] leading-normal">
                              <span className="font-bold">
                                {point.heading}:
                              </span>{" "}
                              {point.answer}
                            </div>
                          </div>
                        );
                      } else {
                        // Handle normal string points
                        return (
                          <div key={`point-${i}`} className="flex pb-4">
                            <div className="mr-2 flex items-start justify-center">
                              <EsseTickCircleS className="w-5 lg:w-6 h-5 lg:h-6 text-primary" />
                            </div>
                            <div className="pl-4 last:pl-0 text-base md:text-[20px] leading-normal">
                              {point}
                            </div>
                          </div>
                        );
                      }
                    })} */}
                    {_data?.points?.map((point, i) => {
                      if (typeof point === "object" && "heading" in point) {
                        // Handle keyBenefits object
                        return (
                          <div key={`point-${i}`} className="flex pb-4">
                            <div className="ml-14 md:ml-20 text-base md:text-[20px] leading-normal">
                              <span className="font-bold">
                                {point.heading}:
                              </span>{" "}
                              {point.answer}
                            </div>
                          </div>
                        );
                      } else if (typeof point === "string") {
                        // Handle plain string
                        return (
                          <div key={`point-${i}`} className="flex pb-4">
                            <div className="mr-2 flex items-start justify-center">
                              <EsseTickCircleS className="w-5 lg:w-6 h-5 lg:h-6 text-primary" />
                            </div>
                            <div className="pl-4 last:pl-0 text-base md:text-[20px] leading-normal">
                              {point}
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </section>
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

export default Support;
