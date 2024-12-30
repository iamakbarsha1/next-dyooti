import React from "react";
import Accordion from "../Accordion";
import Image from "next/image";

const SnowSolutions = () => {
  return (
    <main className="relative px-5 md:px-12 lg:px-36 grid grid-cols-1 lg:grid-cols-2">
      {/* <section className=""> */}
      <Image
        alt="pathYellow"
        src={"/assets/images/landingPage/pathYellow.jpg"}
        //   width={640}
        //   height={640}
        //   objectFit="cover"
        width={0}
        height={0}
        //   width={100}
        //   height={100}
        className="absolute -z-10 top-1/2 w-full"
        priority
      />
      {/* </section> */}
      <section>
        <div className="text-[32px] text-black font-bold">
          <span className="text-primary">ServiceNow</span> Solutions
        </div>
        <div className="mt-4 mb-8 text-base">
          We provide workflows that can evolve into a powerful engine for
          growth. Harness operational flexibility through enhanced adaptability
          to seize the opportunity
        </div>
        <div className="lg:pr-16 lg:px-10">
          <Accordion />
        </div>
      </section>
      <section className="flex items-start justify-center">
        <Image
          alt="insights"
          src={"/assets/images/landingPage/landingPageInsights.jpg"}
          width={640}
          height={640}
          //   objectFit="cover"
          className="object-fill"
          priority
          //   className="w-24 h-10 md:w-32 md:h-12 lg:w-24 lg:h-8"
          //   alt={img?.clientName}
          //   src={img?.clientLogo}
          //   width={0} // Use "0" and rely on Tailwind for width
          //   height={0} // Use "0" and rely on Tailwind for height
        />
      </section>
    </main>
  );
};

export default SnowSolutions;
