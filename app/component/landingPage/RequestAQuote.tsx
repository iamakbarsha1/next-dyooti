"use client";
import React, { useState } from "react";

const RequestAQuote: React.FC = () => {
  const [requestFormData, setRequestFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });

  const requestFormDataList = [
    {
      name: "name",
      placeholder: "Name",
      value: requestFormData?.name,
    },
    {
      name: "companyName",
      placeholder: "Company Name",
      value: requestFormData?.companyName,
    },
    {
      name: "email",
      placeholder: "Email",
      value: requestFormData?.email,
    },
    {
      name: "phone",
      placeholder: "Phone No",
      value: requestFormData?.phone,
    },
    {
      name: "services",
      placeholder: "Which ServiceNow services do you need?",
      value: requestFormData?.services,
    },
    {
      name: "message",
      placeholder: "Your Message",
      value: requestFormData?.message,
    },
  ];

  //   const requestFormDataList = [
  //     [
  //       {
  //         name: "name",
  //         placeholder: "Name",
  //         value: requestFormData?.name,
  //       },
  //       {
  //         name: "companyName",
  //         placeholder: "Company Name",
  //         value: requestFormData?.companyName,
  //       },
  //     ],
  //     [
  //       {
  //         name: "email",
  //         placeholder: "Email",
  //         value: requestFormData?.email,
  //       },
  //       {
  //         name: "phone",
  //         placeholder: "Phone No",
  //         value: requestFormData?.phone,
  //       },
  //     ],
  //     {
  //       name: "services",
  //       placeholder: "Which ServiceNow services do you need?",
  //       value: requestFormData?.services,
  //     },
  //     {
  //       name: "message",
  //       placeholder: "Your Message",
  //       value: requestFormData?.message,
  //     },
  //   ];

  const HandleInputChange = (key: string, value: string) => {
    setRequestFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <main className="mt-5 md:mt-10 my-5 lg:my-[60px] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
      <main className="pr-5 md:pr-0 pl-5 md:pl-12 lg:pl-36 py-5 md:py-10 lg:py-16 bg-secondary">
        <div className="mb-4 text-base md:text-xl lg:text-3xl font-bold text-black">
          Request A Quote
        </div>
        <div className="text-sm md:text-base">
          Dyooti is your trusted partner for ServiceNow Consulting &
          Implementation, blending transformation expertise with a
          customer-focused ethos. If you’re in search of the ideal workflow
          solution, don’t hesitate to get in touch with Dyooti.
        </div>
      </main>
      <main className="ml-5 md:ml-0 mr-5 md:mr-12 lg:mr-36">
        <section className="">
          {requestFormDataList?.map((_input) => {
            return (
              <div key={_input?.name} className="mb-4 md:mb-7">
                <input
                  name={_input.name}
                  value={_input.value}
                  placeholder={_input.placeholder}
                  onChange={(e) =>
                    HandleInputChange(_input?.name, e.target.value)
                  }
                  className="px-4 md:px-7 py-3 md:py-7 w-full outline-none rounded-xl bg-secondary placeholder-black"
                />
              </div>
            );
          })}
        </section>
      </main>
    </main>
  );
};

export default RequestAQuote;
