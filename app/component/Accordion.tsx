import React, { useState } from "react";

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
    {
      title: "Header 4",
      description:
        "Using digital processes, we unify clients, front-line agents, as well as middle and back-office staff onto a single ServiceNow platform through ServiceNow Customer Workflows, enabling the scaling of customer operations.",
    },
  ];

  return (
    <section className="w-full py-8 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="animated-accordion-container">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${
                activeIndex === index ? "active" : ""
              } mb-4 border-b border-gray-300`}
            >
              {/* Header */}
              <div
                className="accordion-item-header flex justify-between items-center px-4 py-3 cursor-pointer bg-white shadow-sm"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              {/* Description */}
              <div
                className={`accordion-description px-4 py-3 bg-gray-50 transition-all overflow-hidden ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
