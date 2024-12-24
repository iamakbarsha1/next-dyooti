import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        alt="logo"
        src={"/assets/logo/logo.png"}
        width={140}
        height={38}
        priority
      />
    </div>
  );
};

export default Logo;
