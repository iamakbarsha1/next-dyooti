// ClientLayout.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import NavbarMobile from "./component/NavbarMobile";

const Navbar = dynamic(() => import("./component/Navbar"), {
  ssr: false,
  loading: () => <div className="h-[72px]" />,
});

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  // const [showSidebar, setShowSidebar] = React.useState<boolean>(false);
  return (
    <main className="relative">
      <section className="absolute top-0 left-0 z-50 w-fit h-screen lg:hidden">
        <NavbarMobile />
      </section>
      <Navbar />
      {children}
    </main>
  );
};

export default ClientLayout;
