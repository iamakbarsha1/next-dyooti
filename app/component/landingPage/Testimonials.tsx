import React from "react";
import { ArrBasicArrowLeftO, ArrBasicArrowRightO } from "lovedicons/dist/arrO";

const Testimonials = () => {
  return (
    <section className="py-10 lg:py-12 px-5 md:px-12 xl:px-36 bg-secondary">
      <section className="p-5 md:p-10 xl:p-12 bg-bgGray rounded-3xl">
        <div className="text-lg">Testimonials</div>
        <div className="mt-2 md:mt-4 mb-4 md:mb-8 xl:mb-12 text-black text-2xl lg:text-3xl font-bold">
          Customers <span className="text-custOrange">Loves</span>{" "}
          <span className="text-custBlue">Dyooti</span>
        </div>
        <div className="text-base md:text-lg">
          “Navigating the challenges of coordinating across different time zones
          is no small feat, but our experience with the team was marked by their
          proactive approach and their unwavering commitment to delivering on
          time. Despite the geographical distance, they worked tirelessly to
          ensure that there were no delays in the project. We were particularly
          impressed with the team’s creative applications in the field of data
          engineering, which added significant value to our project. The
          collaborative spirit that pervaded the entire team was nothing short
          of commendable.We extend our heartfelt appreciation to the team for
          their dedication, hard work, and their willingness to go the extra
          mile. Your efforts have not gone unnoticed, and we look forward to
          future collaborations”.
        </div>
        <section className="mt-10 md:mt-12 lg:mt-20 flex flex-col md:flex-row items-end md:items-center">
          <div className="flex flex-grow">
            <div className="w-1 bg-primary rounded-sm"></div>

            <div className="ml-2 flex-grow">
              <div className="text-xl lg:text-2xl font-bold">Global CTO</div>
              <div className="text-sm md:text-base">
                Leading Publicly Traded E-Commerce Fashion Site In Emerging
                Markets
              </div>
            </div>
          </div>
          <div className="md:ml-3 flex items-center justify-center gap-3">
            <ArrBasicArrowLeftO className="w-6 h-6" />
            <ArrBasicArrowRightO className="w-6 h-6" />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Testimonials;
