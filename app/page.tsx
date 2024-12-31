// // import heroLandingImage from "/assets/images/landingPageHero.jpg";

import Image from "next/image";
import ClientLogo from "./component/ClientLogo";
import SnowSolutions from "./component/landingPage/SnowSolutions";
import SnowMicroManagement from "./component/landingPage/SnowMicroManagement";
import Testimonials from "./component/landingPage/Testimonials";
import Insights from "./component/landingPage/Insights";

// export default function Home() {
//   return (
//     <main className="w-screen">
//       <section className="relative h-[650px] w-full">
//         <div className="absolute z-50 top-0 left-0 bottom-0 right-0 flex items-center justify-center">
//           <div className="h-full truncate flex items-center justify-center text-white font-bold text-center">
//             <div className="w-full flex flex-col items-center justify-center bg-red-400">
//               <div className="text-8xl w-full bg-green-200">
//                 We streamline <br /> business processes <br /> with{" "}
//                 <span className="text-primary">ServiceNow</span>{" "}
//               </div>
//               <p className="text-xl text-center w-full h-full bg-purple-400">
//                 Modernize antiquated processes through the utilization of
//                 ServiceNow’s digital automation features, offering customers an
//                 exceptional user experience elevated by the empowerment of AI.
//               </p>
//             </div>
//           </div>
//         </div>
//         <Image
//           // width={1200}
//           // height={400}
//           alt="landingPageHero"
//           src={"/assets/images/landingPageHero.jpg"}
//           priority={true}
//           fill={true}
//         />
//       </section>
//     </main>
//   );
// }
export default function Home() {
  interface CISO {
    name: string;
    description: string;
    // icon: React.JSX.Element;
    icon: string;
  }
  const ciso: CISO[] = [
    {
      name: "Consult",
      description:
        "Aligning Objectives and Approaches for Process Optimization",
      icon: "/assets/icons/boxTick.jpg",
    },
    {
      name: "Implement",
      description: "Implementing Swift Resolutions of Complex Customer Issues",
      icon: "/assets/icons/key.jpg",
    },
    {
      name: "Support",
      description:
        "High-performance Standards Guaranteed Through The Support and Stability of Robust IT Solutions",
      icon: "/assets/icons/unlock.jpg",
    },
    {
      name: "Optimise",
      description:
        "Develop A Strategic Roadmap to Optimize Your ServiceNow Environment For Enhanced Efficiency",
      icon: "/assets/icons/support.svg",
    },
  ];

  return (
    <main className="w-screen">
      <section className="relative h-[650px] w-full">
        <div className="absolute z-40 top-0 left-0 bottom-0 right-0 flex items-center justify-center">
          <div className="h-full flex items-center justify-center text-white font-bold text-center">
            <div className="w-full max-w-[950px] flex flex-col items-center justify-center space-y-6 px-4">
              {/* Hero Title */}
              <div className="text-[50px] lg:text-8xl">
                We streamline <br /> business processes <br /> with{" "}
                <span className="text-primary">ServiceNow</span>
              </div>
              {/* Paragraph */}
              <p className="text-xl font-normal">
                Modernize antiquated processes through the utilization of
                ServiceNow’s digital automation features, offering customers an
                exceptional user experience elevated by the empowerment of AI.
              </p>
            </div>
          </div>
        </div>
        {/* Background Image */}
        <Image
          alt="landingPageHero"
          src={"/assets/images/landingPageHero.jpg"}
          priority={true}
          fill={true}
          className="object-cover object-center"
        />
      </section>
      <ClientLogo />
      {/* Section */}
      <section className="mt-5 md:mt-10 my-5 lg:my-[60px] px-5 md:px-12 lg:px-36">
        <div className="text-[28px] md:text-[32px] font-bold text-center">
          Our ServiceNow solutions offer exceptional{" "}
          <br className="hidden md:block" /> performance and come equipped with
          built-in capabilities
          {/* performance and come equipped with built-in capabilities */}
        </div>
        <section className="mt-10 md:mt-24 gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {ciso?.map((ciso) => {
            return (
              <section key={ciso.name} className="p-10 shadow-xl rounded-3xl">
                <div>
                  <Image
                    alt={ciso.name}
                    src={ciso.icon}
                    width={40}
                    height={40}
                    // priority={true}
                    // fill={true}
                    // className="object-cover object-center"
                  />
                </div>
                <div className="mt-4 mb-7 text-[22px] font-bold">
                  {ciso.name}
                </div>
                <div className="text-base">{ciso.description}</div>
              </section>
            );
          })}
        </section>
      </section>
      <SnowSolutions />
      <SnowMicroManagement />
      <Testimonials />
      <Insights />
      {/* dummy */}
      <section className="mt-5 md:mt-10 my-5 lg:my-[60px] px-5 md:px-12 lg:px-36">
        <div className="text-[28px] md:text-[32px] font-bold text-center">
          Our ServiceNow solutions offer exceptional{" "}
          <br className="hidden md:block" /> performance and come equipped with
          built-in capabilities
          {/* performance and come equipped with built-in capabilities */}
        </div>
        <section className="mt-10 md:mt-24 gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {ciso?.map((ciso) => {
            return (
              <section key={ciso.name} className="p-10 shadow-xl rounded-3xl">
                <div>
                  <Image
                    alt={ciso.name}
                    src={ciso.icon}
                    width={40}
                    height={40}
                    // priority={true}
                    // fill={true}
                    // className="object-cover object-center"
                  />
                </div>
                <div className="mt-4 mb-7 text-[22px] font-bold">
                  {ciso.name}
                </div>
                <div className="text-base">{ciso.description}</div>
              </section>
            );
          })}
        </section>
      </section>
    </main>
  );
}
