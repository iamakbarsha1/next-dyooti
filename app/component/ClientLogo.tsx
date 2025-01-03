import Image from "next/image";
import React from "react";

const ClientLogo = () => {
  interface ClientLogoContent {
    clientName: string;
    clientLogo: string;
  }

  const clientLogoContent: ClientLogoContent[] = [
    {
      clientName: "Born",
      clientLogo: "/assets/logo/client/born/born2.jpg",
    },
    {
      clientName: "Fujitsu",
      clientLogo: "/assets/logo/client/fujitsu/fujitsu2.jpg",
    },
    {
      clientName: "Genpact",
      clientLogo: "/assets/logo/client/genpact/genpact2.jpg",
    },
    {
      clientName: "GFG",
      clientLogo: "/assets/logo/client/gfg/gfg2.jpg",
    },
    {
      clientName: "impiger",
      clientLogo: "/assets/logo/client/impiger/impiger2.jpg",
    },
    {
      clientName: "ningaEdge",
      clientLogo: "/assets/logo/client/ninjaEdge/ninjaEdge2.jpg",
    },
  ];

  return (
    <main className="my-10 lg:my-20 lg:mt-[72px]">
      <div className="w-full flex items-center justify-center gap-10 lg:gap-12 overflow-scroll">
        {clientLogoContent?.map((img) => {
          return (
            <div key={img?.clientName} className="flex-shrink-0">
              <Image
                className="object-contain"
                alt={img?.clientName}
                src={img?.clientLogo}
                width={92} // Adjust these values to match the actual size
                height={32} // Adjust these values to match the actual size
                sizes="(max-width: 768px) 92px, 
                  (max-width: 1024px) 128px, 
                  160px" // Define sizes for responsive behavior
              />
              {/* <Image
                className="w-24 h-10 md:w-32 md:h-12 lg:w-24 lg:h-8"
                alt={img?.clientName}
                src={img?.clientLogo}
                width={0} // Use "0" and rely on Tailwind for width
                height={0} // Use "0" and rely on Tailwind for height
              /> */}
              {/* <Image
                width={92}
                height={32}
                alt={img?.clientName}
                src={img?.clientLogo}
              /> */}
            </div>
          );
        })}
        {/* <Image
          width={92}
          height={32}
          alt="clientLogo"
          src="/assets/logo/client/fujitsu/fujitsu2.jpg"
        />
        <Image
          width={92}
          height={32}
          alt="clientLogo"
          src="/assets/logo/client/genpact/genpact2.jpg"
        /> */}
      </div>
    </main>
  );
};

export default ClientLogo;
