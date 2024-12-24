import heroLandingImage from "/assets/images/landingPageHero.jpg";

import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen bg-red-100">
      <div className="relative h-[650px]">
        <div className="absolute z-50 top-0 left-0 bottom-0 right-0 w-[900px] mt-40 text-8xl text-white font-bold text-center">
          We streamline business processes with ServiceNow
        </div>
        <Image
          // width={1200}
          // height={400}
          alt="landingPageHero"
          src={"/assets/images/landingPageHero.jpg"}
          priority={true}
          fill={true}
        />
      </div>
    </main>
  );
}
