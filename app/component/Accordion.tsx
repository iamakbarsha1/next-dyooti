// "use client";
// import React, { useState } from "react";
// import { ArrArrowCircleDownS } from "lovedicons/dist/arrS";

// const Accordion: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   const handleToggle = (index: number) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   const accordionItems = [
//     {
//       title: "Customer Workflows",
//       description:
//         "Using digital processes, we unify clients, front-line agents, as well as middle and back-office staff onto a single ServiceNow platform through ServiceNow Customer Workflows, enabling the scaling of customer operations.",
//     },
//     {
//       title: "Employee Workflows",
//       description:
//         "We provide workflows capable of converting it into a fully developed growth catalyst. Harness the advantages of operational flexibility to enhance workforce adaptability.",
//     },
//     {
//       title: "Technology Workflows",
//       description:
//         "Powerful tool to enable organizations to orchestrate, manage, and optimize complex technology processes with ease.",
//     },
//     {
//       title: "Creator Workflows",
//       description:
//         "Leveraging a low-code platform, you can swiftly develop digital workflow applications, enabling rapid scaling throughout the organization to construct seamless, interconnected user experiences that are highly enjoyable.",
//     },
//   ];

//   return (
//     <section className="max-w-xl xl:max-w-2xl mx-auto my-8 lg:my-10 bg-white rounded-[40px] shadow-2xl">
//       {/* <div className="max-w-xl mx-auto"> */}
//       <div className="animated-accordion-container p-10">
//         {accordionItems.map((item, index) => (
//           <section
//             key={item.title}
//             className={`${activeIndex === index && `border-b-0`} ${
//               activeIndex === index + 1 && `border-b-0`
//             } border-b border-secondary last:border-b-0`}
//           >
//             <div
//               className={`accordion-item ${
//                 activeIndex === index
//                   ? "mb-4 active bg-darkPrimary text-white"
//                   : ""
//               } p-10 rounded-3xl`}
//             >
//               <div
//                 className={`accordion-item-header flex justify-between items-center cursor-pointer ${
//                   activeIndex === index && `pb-6`
//                 }`}
//                 onClick={() => handleToggle(index)}
//               >
//                 <div className="text-2xl font-semibold">{item.title}</div>
//                 <ArrArrowCircleDownS className="w-6 h-6" />
//               </div>
//               <div
//                 className={`accordion-description text-base transition-all overflow-hidden ease-in-out ${
//                   activeIndex === index ? "max-h-screen" : "max-h-0"
//                 }`}
//               >
//                 {item.description}
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>
//       {/* </div> */}
//     </section>
//   );
// };

// export default Accordion;
"use client";
import React, { useState } from "react";
import { ArrArrowCircleDownS } from "lovedicons/dist/arrS";

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionItems = [
    {
      title: "Customer Workflows",
      description:
        "Using digital processes, we unify clients, front-line agents, as well as middle and back-office staff onto a single ServiceNow platform through ServiceNow Customer Workflows, enabling the scaling of customer operations.",
    },
    {
      title: "Employee Workflows",
      description:
        "We provide workflows capable of converting it into a fully developed growth catalyst. Harness the advantages of operational flexibility to enhance workforce adaptability.",
    },
    {
      title: "Technology Workflows",
      description:
        "Powerful tool to enable organizations to orchestrate, manage, and optimize complex technology processes with ease.",
    },
    {
      title: "Creator Workflows",
      description:
        "Leveraging a low-code platform, you can swiftly develop digital workflow applications, enabling rapid scaling throughout the organization to construct seamless, interconnected user experiences that are highly enjoyable.",
    },
  ];

  return (
    <section className="max-w-xl xl:max-w-2xl mx-auto my-8 lg:my-10 bg-white rounded-[40px] shadow-2xl">
      <div className="animated-accordion-container p-10">
        {accordionItems.map((item, index) => (
          <section
            key={item.title}
            className={`overflow-hidden border-b border-secondary last:border-b-0`}
          >
            <div
              className={`accordion-item relative z-10 ${
                activeIndex === index ? "text-white" : ""
              } p-10 rounded-3xl`}
            >
              {/* Background animation */}
              <div
                className={`absolute top-0 -z-50 inset-0 w-full bg-darkPrimary transition-all duration-500 ease-in-out rounded-3xl ${
                  activeIndex === index ? "h-full visible" : "h-0 invisible"
                }`}
                // style={{
                //   zIndex: -1,
                // }}
              ></div>

              <div
                className="accordion-item-header flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className="text-2xl font-semibold">{item.title}</div>
                <ArrArrowCircleDownS className="w-6 h-6" />
              </div>
              <div
                className={`accordion-description overflow-hidden text-base transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "mt-4 max-h-screen" : "max-h-0"
                }`}
                // style={{ overflow: "hidden" }}
              >
                {item.description}
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Accordion;

// <section className="max-w-xl xl:max-w-2xl mx-auto my-8 lg:my-10 bg-white rounded-[40px] shadow-2xl">
//   {/* <div className="max-w-xl mx-auto"> */}
//   <div className="animated-accordion-container p-10">
//     {accordionItems.map((item, index) => (
//       <section
//         key={item.title}
//         className={`relative overflow-hidden ${
//           activeIndex === index && `border-b-0`
//         } ${
//           activeIndex === index + 1 && `border-b-0`
//         } border-b border-secondary last:border-b-0`}
//       >
//         <div
//           className={`accordion-item relative ${
//             activeIndex === index ? "mb-4 active text-white" : ""
//           } p-10 rounded-3xl`}
//         >
//           {/* <div
//         className={`accordion-item relative ${
//           activeIndex === index
//             ? "mb-4 active bg-darkPrimary text-white"
//             : ""
//         } p-10 rounded-3xl`}
//       > */}
//           <div
//             className={`absolute inset-0 bg-darkPrimary transition-all duration-500 ease-in-out ${
//               activeIndex === index ? "h-full" : "h-0"
//             }`}
//             style={{
//               zIndex: -1,
//             }}
//           ></div>
//           <div
//             className={`accordion-item-header flex justify-between items-center cursor-pointer ${
//               activeIndex === index && `pb-6`
//             }`}
//             onClick={() => handleToggle(index)}
//           >
//             <div className="text-2xl font-semibold">{item.title}</div>
//             <ArrArrowCircleDownS className="w-6 h-6" />
//           </div>
//           <div
//             className={`accordion-description text-base transition-all overflow-hidden ease-in-out ${
//               activeIndex === index ? "max-h-screen" : "max-h-0"
//             }`}
//           >
//             {item.description}
//           </div>
//         </div>
//       </section>
//     ))}
//   </div>
//   {/* </div> */}
// </section>;
