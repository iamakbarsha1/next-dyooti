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
          image: "/assets/images/imp-csm.png",
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
          shortTerm: "FSM",
          fullForm: "Field Service Management",
          image: "/assets/images/imp-fsm.png",
          points: [
            "By adopting FSM (Field Service Management), our specialists can efficiently assist clients in translating customer needs into technical implementations.",
            "This includes managing work orders, dispatching technicians, tracking assets, and ensuring that field service teams have the resources and information they need to deliver high-quality service to customers.",
            "FSM in ServiceNow provides a centralized platform for organizations to streamline their field service processes, improve operational efficiency, and enhance customer satisfaction.",
          ],
          keyBenefits: [
            {
              heading: "Integration Prowess",
              answer:
                "FSM serves as an integration champion, expediting the linkage of ServiceNow with third-party systems while maintaining a high standard of quality.",
            },
            {
              heading: "Enhanced User Adoption",
              answer:
                "FSM’s solutions are poised to experience substantial growth, underscoring the IT industry’s need to prioritize technology investments and extract maximum ROI benefits.",
            },
            {
              heading: "Effortless Ecosystem Management",
              answer:
                "In response to evolving client expectations, we are poised to design solutions for emerging sectors and collaboratively develop industry-specific solutions with strategic partners.",
            },
          ],
        },
        {
          shortTerm: "FSO",
          fullForm: "Financial Services Operations",
          image: "/assets/images/imp-fso.png",
          points: [
            "Financial Service Operations within ServiceNow is designed to streamline financial and accounting processes for organizations. ServiceNow is primarily known for its IT Service Management (ITSM) capabilities.",
            "FSO or Financial Services Operations, empowers financial institutions to securely automate their fundamental operational procedures using pre-designed digital applications and workflows.",
            "The capability expands its features to encompass financial operations, establishing a unified platform for the management of financial workflows and tasks.",
            "This module connects operations across all departments within financial institutions, encompassing front, middle, and back-office functions, all under one unified platform.",
          ],
          keyBenefits: [
            {
              heading: "Comprehensive Support",
              answer:
                "Clients can enhance their business performance by leveraging end-to-end metrics and real-time analytics.",
            },
            {
              heading: "Enhancing Operational Resilience",
              answer:
                "Implementing FSO facilitates effective disruption management and enables continuous monitoring of risk and compliance through real-time tools. The automation of processes enhances visibility and eliminates bottlenecks throughout the institution.",
            },
            {
              heading: "Scalability Solutions",
              answer:
                "FSO offers large banking organizations the confidence to expand their business seamlessly by providing integrated and scalable solutions.",
            },
          ],
        },
      ],
    },
    {
      category: "EMPLOYEE WORKFLOWS",
      data: [
        {
          shortTerm: "HRSD",
          fullForm: "Human Resource Service Delivery",
          image: "/assets/images/imp-hrsd.png",
          points: [
            "The ServiceNow HRSD module lets employers personalize content experiences on a unified platform and ensure efficient service delivery across multiple departments.",
            "Cross-functionality across departments enables employees to conveniently access services from various departments and functions, accomplish necessary tasks, and interact through tailored communications.",
            "Application of the module simplifies the process for employees to receive prompt responses, and instantly resolve any issues through a single portal.",
          ],
          keyBenefits: [
            {
              heading: "Transform Employee Journey",
              answer:
                "ServiceNow HRSD’s automated workflows and personalized communications can provide employees with relevant and timely feedback and learning opportunities to support their career development and skill enhancement.",
            },
            {
              heading: "Streamlining Accessibility",
              answer:
                "The ServiceNow HRSD module provides a unified and simplified interface that helps organizations transform complex HR processes into easily scalable services and support for their employees.",
            },
            {
              heading: "Manage Employee Life-cycle and Improved Performance",
              answer:
                "By simplifying complex human resources tools and processes, the HRSD tool empowers organizations to self-serve, and leverage automation to improve HR function and productivity by offering positive, efficient, and effective employee service.",
            },
          ],
        },
      ],
    },
    {
      category: "TECHNOLOGY WORKFLOWS",
      data: [
        {
          shortTerm: "ITSM",
          fullForm: "IT Services Management",
          image: "/assets/images/imp-itsm.png",
          points: [
            "Addressing contemporary technological challenges, such as the integration of fragmented IT processes, resolution of service outages, and clarification of cloud complexities, necessitates a comprehensive solution that enhances stakeholder visibility.",
            "Incorporating ITSM into your technology strategy empowers you to not only tackle current challenges but also proactively adapt to the ever-evolving technology landscape.",
            "With IT Service Management (ITSM), forward-looking businesses can engineer proactive and dynamic IT solutions, enabling the delivery of high-performance IT services on demand.",
          ],
          keyBenefits: [
            {
              heading: "360 Degree Visibility",
              answer:
                "Gain a profound understanding of processes and services through a robust dashboard that simplifies complex data using interactive analytics and straightforward statistics. This deep dive ensures a clear picture of your IT landscape.",
            },
            {
              heading: "Enhanced Service Experience",
              answer:
                "Drive operational efficiencies across the entire organization, transforming business operations to elevate both employee and customer satisfaction. Streamlined processes lead to an improved service experience.",
            },
            {
              heading: "Boosted Agent Productivity",
              answer:
                "Increase agent efficiency by automating routine tasks, prioritizing critical issues, and providing a centralized platform and dashboard for managing incidents and service requests. This empowers agents to focus on high-impact tasks.",
            },
          ],
        },
        {
          shortTerm: "ITOM",
          fullForm: "IT Operations Management",
          image: "/assets/images/imp-itom.png",
          points: [
            "ServiceNow ITOM allows clients to elevate their current IT model by transitioning from a reactive and responsive model for enhanced Operations Management support.",
            "ITOM module enables clients to leverage the power of AI and Machine Learning to eliminate silos, reduce friction, improve process automation, and enable a continuous improvement cycle.",
            "The ITOM module develops a comprehensive and integrated set of capabilities that seamlessly build on your existing ServiceNow IT Service Management (ITSM) investment.",
          ],
          keyBenefits: [
            {
              heading: "Automate Resolutions and Increased Agility",
              answer:
                "Insights-based solutions reduce recovery time and aid in streamlining recurring tasks with pre-configured playbooks and a comprehensive knowledge base.",
            },
            {
              heading: "Manage Service Health",
              answer:
                "Transform your IT Operations Services into a premium partner that delivers quality solutions to your organization by increasing the operational efficiency of your cloud environment.",
            },
            {
              heading: "Building a Mature Foundation",
              answer:
                "Defining future-proof ITOM Solutions, by implementing new ITOM modules, the added value will significantly increase.",
            },
          ],
        },
        {
          shortTerm: "ITAM",
          fullForm: "IT Asset Management",
          image: "/assets/images/imp-itam.png",
          points: [
            "IT Asset Management is a set of practices and strategies used by organizations to optimize the procurement, deployment, utilization, maintenance, and disposal of IT assets throughout their lifecycle.",
            "ServiceNow ITAM enables a centralized database to identify areas where costs can be minimized with improved compliance, effective utilization of resources, and compliance.",
            "IT assets can include hardware, software, networks, cloud services, and even digital assets like licenses and user accounts. For high-security digital assets, security risks can be mitigated, and standardization can be achieved.",
          ],
          keyBenefits: [
            {
              heading: "Lowered Risk Solutions",
              answer:
                "By mitigating and minimizing the likelihood and impact of security breaches, maintaining strict regulatory and industry standards compliances.",
            },
            {
              heading: "Lowered Cost",
              answer:
                "Through the maintenance of an accurate inventory of IT assets and associated data, software licenses, and hardware configurations.",
            },
            {
              heading: "Secure Maintenance Schedules",
              answer:
                "To eliminate unnecessary expenses related to these assets, and avoiding costly downtime and disruptions caused by IT failures or outages.",
            },
          ],
        },
        {
          shortTerm: "SPM",
          fullForm: "Strategic Portfolio Management",
          image: "/assets/images/imp-spm.png",
          points: [
            "Strategic Portfolio Management (SPM) offers clients a unified platform for managing both strategic and operational tasks, effectively reducing bottlenecks and expediting time-to-market.",
            "Incorporating SPM into your operations not only minimizes obstacles but also fosters a data-driven, streamlined, and strategically aligned approach to achieving organizational success.",
          ],
          keyBenefits: [
            {
              heading: "Comprehensive Insights",
              answer:
                "SPM provides invaluable insights that keep organizational goals at the forefront, offering a macro view of strategic and business needs. This perspective ensures alignment with broader objectives.",
            },
            {
              heading: "Data-Driven Decision Making",
              answer:
                "By adopting a data-driven approach that engages all stakeholders, organizations can make well-informed investment decisions, mitigating risks and optimizing outcomes.",
            },
            {
              heading: "Reduced Administrative Burden",
              answer:
                "SPM streamlines information access, ensuring timely availability of high-quality data. This reduces administrative burdens and enhances overall operational efficiency.",
            },
            {
              heading: "Business & Enterprise Architecture",
              answer:
                "SPM identifies interdependencies across portfolios and aligns them with “desired state” models, optimizing strategy execution in accordance with the business strategy. Leveraging a robust business architecture model alongside the right enterprise architecture components provides a holistic understanding of the enterprise’s intricacies.",
            },
          ],
        },
        {
          shortTerm: "SECOPS",
          fullForm: "Security Operations",
          image: "/assets/images/imp-secops.png",
          points: [
            "Security Operations serves as the nexus for collaboration between IT Security and IT Operations teams, effectively safeguarding systems and data while minimizing threats to businesses.",
            "By embracing our Security Operations solution, organizations not only fortify their defenses but also proactively identify and address security risks, bolstering their overall security posture and operational efficiency.",
          ],
          keyBenefits: [
            {
              heading: "Integrated SecOps System",
              answer:
                "Our comprehensive SecOps system seamlessly brings together traditionally separate operational tools, including Endpoint Detection and Response, Threat Intelligence Platform, and Security Information and Event Management. This integration enables the harmonious flow of data between these sources, empowering users to leverage existing ServiceNow data and processes to address vulnerabilities and manage security incidents.",
            },
            {
              heading: "Data-Driven Decision Making",
              answer:
                "By adopting a data-driven approach that engages all stakeholders, organizations can make well-informed investment decisions, mitigating risks and optimizing outcomes.",
            },
            {
              heading: "Reduced Administrative Burden",
              answer:
                "SPM streamlines information access, ensuring timely availability of high-quality data. This reduces administrative burdens and enhances overall operational efficiency.",
            },
            {
              heading: "Business & Enterprise Architecture",
              answer:
                "SPM identifies interdependencies across portfolios and aligns them with “desired state” models, optimizing strategy execution in accordance with the business strategy. Leveraging a robust business architecture model alongside the right enterprise architecture components provides a holistic understanding of the enterprise’s intricacies.",
            },
          ],
        },
      ],
    },
    {
      category: "CREATOR WORKFLOWS",
      data: [
        {
          shortTerm: "Low Code Platform",
          fullForm: "",
          image: "/assets/images/imp-lcp.png",
          points: [
            "With ServiceNow Creator Workflows, businesses can transition from a concept to a fully functional app in less than a day.",
            "Utilize a low-code platform to swiftly develop digital workflow applications, enabling rapid scalability across your organization for the creation of seamless, interconnected user experiences.",
            "ServiceNow Creator Workflows provide frictionless, intuitive, intelligent, and highly tailored experiences. Simplified procedures take advantage of sophisticated built-in automation, integration, analytics, and intelligence, all of which are supplied in a seamless manner. Users can fuel their own productivity within a single full context view of all data, and AI-assisted recommendations to quickly fix issues, so there’s no more scrambling to gather entire information.",
            "This empowers individuals, allowing them to swiftly and safely create engaging app experiences that can scale from a single department to the entire organization.",
          ],
          keyBenefits: [
            {
              heading: "App Engine Studio",
              answer:
                "Swift Deployment of Vital Creator Workflow Apps - Our primary focus is on the rapid deployment of mission-critical Creator Workflow applications, all while adhering to best-practice guidance and templates. We aim to ensure a comprehensive low-code development experience throughout the process.",
            },
            {
              heading: "Integration Hub",
              answer:
                "Streamlining ServiceNow Integrations for Efficiency - Simplify cross-enterprise automation and cut down on the costs and intricacies of ServiceNow integrations with Integration Hub. Easily connect to essential business systems and build and oversee multi-system workflows without the need for coding, ensuring swift and efficient integration.",
            },
          ],
        },
        {
          shortTerm: "Custom Implementations",
          fullForm: "",
          image: "/assets/images/imp-ci.png",
          points: [
            "In the realm of custom implementations, the possibilities are boundless with ServiceNow. That’s why we engage closely with our clients to gain a deep understanding of their business and meticulously tailor the right ServiceNow products to align with their unique processes.",
            "Our suite of customized implementation services is designed to meet the precise needs of our clients. This encompasses consulting and development strategies that guarantee a collaborative engagement from the project’s inception to its successful completion.",
          ],
          keyBenefits: [],
        },
        {
          shortTerm: "Integrations",
          fullForm: "",
          image: "/assets/images/imp-i.png",
          points: [
            "Clients can rest assured, knowing that our seasoned ServiceNow consultants are adept at tailoring integrations to seamlessly align with niche workflows and unique business processes.",
            "Our expertise extends to crafting custom integrations through API development and specialized tools, enabling swift solutions to our client’s business challenges. Leveraging ServiceNow’s robust capabilities and integration kits, we support wide-ranging integrations and automated workflows that facilitate ongoing service enhancements.",
            "With our assistance, you can automate the orchestration of both internal and external enterprise resources, sidestepping the typical integration constraints that often exist between people, data, systems, and processes.",
          ],
          keyBenefits: [],
        },
      ],
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
        {implementData?.map((_data) => {
          return (
            <main
              className={`py-12 md:py-24 flex items-center justify-center flex-col border-b`}
              key={_data?.category}
            >
              <section className="px-8 md:px-12 xl:px-40 mb-8 md:mb-10 w-full flex items-start text-[28px] md:text-[32px] text-custBlue uppercase">
                {_data?.category}
              </section>
              {_data?.data?.map((_content, index) => {
                return (
                  <main
                    key={_content?.shortTerm}
                    className="px-8 md:px-12 xl:px-40 py-6 lg:py-16 odd:bg-secondary even:bg-white tracking-wide"
                  >
                    <main
                      className={`flex flex-col lg:flex-row items-center justify-center ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      <section className="w-full">
                        <div className="text-4xl font-gilroy font-bold">
                          {_content?.shortTerm}
                        </div>
                        <div className="text-2xl mt-4 mb-6 text-gray-400">
                          {_content?.fullForm}
                        </div>
                        <section className="flex flex-col items-start">
                          {_content?.points?.map((points) => {
                            return (
                              <div key={points} className="flex pb-4">
                                <div className="mr-2 flex items-start justify-center">
                                  <EsseTickCircleS className="w-5 lg:w-6 h-5 lg:h-6 text-primary" />
                                </div>
                                <div className="pl-4 last:pl-0 text-base md:text-[20px] leading-normal">
                                  {points}
                                </div>
                              </div>
                            );
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
                          src={_content.image}
                          //   priority={true}
                          //   fill={true}
                          width={280}
                          height={280}
                          className="md:w-full md:h-full object-contain object-center"
                        />
                      </section>
                    </main>
                    {_content.keyBenefits.length > 0 ? (
                      <section className="mt-8 md:mt-10 lg:mt-12 p-5 md:p-8 lg:p-10 bg-secondary rounded-[20px]">
                        <div className="pb-6 md:pb-10 text-2xl lg:text-[32px] font-gilroy font-bold">
                          Key benefits include
                        </div>
                        <section className="">
                          {_content.keyBenefits?.map((_benefits) => {
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
