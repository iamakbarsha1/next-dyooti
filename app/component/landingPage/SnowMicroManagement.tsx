import Image from "next/image";
import React from "react";

const SnowMicroManagement = () => {
  interface MicroManagementContent {
    title: string;
    description: string;
    imageSrc: string;
    color: string;
  }

  //   interface CardObject {

  //   }

  const microManagementContent: MicroManagementContent[] = [
    {
      title: "Adopting Technology",
      description:
        "We offer practical insights for embracing cutting-edge technologies seamlessly and without hindrance",
      imageSrc: "/assets/images/landingPage/time.png",
      color: "primary",
    },
    {
      title: "Strategic Approaches",
      description:
        "We offer strategic solutions for evaluating your current ServiceNow implementation",
      imageSrc: "/assets/images/landingPage/reload.png",
      color: "custYellow",
    },
    {
      title: "Achieving Digital Excellence",
      description:
        "We offer superior solutions to identify and bridge process gaps in order to enhance digital excellence",
      imageSrc: "/assets/images/landingPage/leaf.png",
      color: "custOrange",
    },
    {
      title: "Cost Optimization",
      description:
        "We offer a cost-effective roadmap to boost productivity and revenue",
      imageSrc: "/assets/images/landingPage/tag.png",
      color: "custBlue",
    },
  ];

  const renderCardContent = (item: MicroManagementContent) => {
    return (
      <section
        key={item.title}
        className={`relative w-[300px] md:w-[320px] xl:w-[350px] max-w-96 h-[400px] md:h-[410px] xl:h-[480px] m-5 p-10 bg-white rounded-3xl shadow-lg`}
      >
        <div
          className={`text-2xl pb-6 font-bold ${
            item.color === "primary"
              ? "text-primary"
              : item.color === "custYellow"
              ? "text-custYellow"
              : item.color === "custOrange"
              ? "text-custOrange"
              : "text-custBlue"
          }`}
        >
          {item?.title}
        </div>
        <div className="text-base">{item?.description}</div>
        {/* <Image
          alt="insights"
          src={item?.imageSrc}
          width={190}
          height={190}
          className="absolute -bottom-3 -right-3 object-fill"
          priority={true}
        /> */}
        <Image
          alt={item?.title}
          src={item?.imageSrc}
          layout="intrinsic"
          width={120}
          height={120}
          className="absolute -bottom-3 -right-3 object-fill 
             md:w-[150px] md:h-[150px] 
             lg:w-[190px] lg:h-[190px]"
          priority={true}
        />
      </section>
    );
  };

  //   const renderCardContent = (content: MicroManagementContent[]) =>
  //     content.map((item) => (
  //       <section
  //         key={item.title}
  //         className={`relative w-[300px] md:w-[350px] xl:w-[400px] max-w-96 h-[480px] p-10 bg-white rounded-3xl shadow-lg`}
  //       >
  //         <div
  //           className={`text-2xl pb-6 ${
  //             item.color === "primary"
  //               ? "text-primary"
  //               : item.color === "custYellow"
  //               ? "text-custYellow"
  //               : item.color === "custOrange"
  //               ? "text-custOrange"
  //               : "text-custBlue"
  //           }`}
  //         >
  //           {item?.title}
  //         </div>
  //         <div className="text-base">{item?.description}</div>
  //         <Image
  //           alt="insights"
  //           src={item?.imageSrc}
  //           width={190}
  //           height={190}
  //           className="absolute -bottom-3 -right-3 object-fill"
  //           priority={true}
  //         />
  //       </section>
  //     ));

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="text-center">
        <div className="text-[32px] text-black font-bold">
          ServiceNow Mirco Assessment
        </div>
        <div className="mt-4 mb-8 text-base">
          We assist you in evaluating your current ServiceNow implementation
          through a prioritized roadmap that aligns{" "}
          <br className="hidden md:block" /> with your evolving business
          requirements, offering a strategic approach to foster digital
          excellence.
        </div>
      </section>
      <section className="flex mx-auto">
        <Image
          alt="insights"
          src={"/assets/images/landingPage/king.jpg"}
          width={640}
          height={640}
          //   width={0}
          //   height={0}
          //   objectFit="cover"
          className="hidden lg:block object-cover md:object-cover"
          priority={true}
        />
        <section className="relative grid grid-cols-1 md:grid-cols-2">
          <Image
            alt="insights"
            src={"/assets/images/landingPage/king.jpg"}
            width={640}
            height={640}
            //   width={0}
            //   height={0}
            //   objectFit="cover"
            className="lg:hidden absolute w-full h-full object-cover"
            priority={true}
          />
          <section className="">
            {microManagementContent
              .slice(0, 2)
              .map((item) => renderCardContent(item))}
          </section>

          <section className="mt-16">
            {microManagementContent
              .slice(2)
              .map((item) => renderCardContent(item))}
          </section>
          {/* <section className="mt-24"> */}
          {/* {microManagementContent.slice(2).map((item) => {
            return (
              <section
                key={item.title}
                className={`relative w-[300px] md:w-[350px] xl:w-[400px] max-w-96 h-[480px] bg-white rounded-3xl shadow-lg`}
              >
                <div className={`text-${item.color}`}>{item?.title}</div>
                <div>{item?.description}</div>
                <Image
                  alt="insights"
                  src={item?.imageSrc}
                  width={190}
                  height={190}
                  className="absolute -bottom-3 -right-3 object-fill"
                  priority={true}
                />
              </section>
            );
          })} */}
          {/* </section> */}
        </section>
      </section>
    </main>
  );
};

export default SnowMicroManagement;
// import Image from "next/image";
// import React from "react";

// const SnowMicroManagement = () => {
//   interface MicroManagementContent {
//     title: string;
//     description: string;
//     imageSrc: string;
//     color: string;
//   }

//   const microManagementContent: MicroManagementContent[] = [
//     {
//       title: "Adopting Technology",
//       description:
//         "We offer practical insights for embracing cutting-edge technologies seamlessly and without hindrance",
//       imageSrc: "/assets/images/landingPage/time.png",
//       color: "primary",
//     },
//     {
//       title: "Strategic Approaches",
//       description:
//         "We offer strategic solutions for evaluating your current ServiceNow implementation",
//       imageSrc: "/assets/images/landingPage/reload.png",
//       color: "custYellow",
//     },
//     {
//       title: "Achieving Digital Excellence",
//       description:
//         "We offer superior solutions to identify and bridge process gaps in order to enhance digital excellence",
//       imageSrc: "/assets/images/landingPage/leaf.png",
//       color: "custOrange",
//     },
//     {
//       title: "Cost Optimization",
//       description:
//         "We offer a cost-effective roadmap to boost productivity and revenue",
//       imageSrc: "/assets/images/landingPage/tag.png",
//       color: "custBlue",
//     },
//   ];

//   const renderContent = (content: MicroManagementContent[]) =>
//     content.map((item) => (
//       <section
//         key={item.title}
//         className="relative w-[300px] md:w-[350px] xl:w-[400px] h-[480px] bg-white rounded-3xl shadow-lg flex flex-col p-6"
//       >
//         <div className={`font-bold text-lg text-${item.color}`}>
//           {item.title}
//         </div>
//         <div className="mt-4 text-sm">{item.description}</div>
//         <Image
//           alt={item.title}
//           src={item.imageSrc}
//           width={190}
//           height={190}
//           className="absolute -bottom-3 -right-3 object-fill"
//           priority={true}
//         />
//       </section>
//     ));

//   return (
//     <main className="px-5 md:px-12 lg:px-36 flex flex-col items-center justify-center">
//       <section className="text-center">
//         <h1 className="text-[32px] text-black font-bold">
//           ServiceNow Micro Assessment
//         </h1>
//         <p className="mt-4 mb-8 text-base">
//           We assist you in evaluating your current ServiceNow implementation
//           through a prioritized roadmap that aligns with your evolving business
//           requirements, offering a strategic approach to foster digital
//           excellence.
//         </p>
//       </section>

//       <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto items-start">
//         {/* Left Side */}
//         <Image
//           alt="insights"
//           src="/assets/images/landingPage/king.jpg"
//           width={640}
//           height={640}
//           className="object-fill"
//           priority={true}
//         />

//         {/* Right Side */}
//         <section className="flex flex-wrap gap-8">
//           {renderContent(microManagementContent)}
//         </section>
//       </section>
//     </main>
//   );
// };

// export default SnowMicroManagement;
