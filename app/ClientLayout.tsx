// ClientLayout.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./component/Navbar"), {
  ssr: false,
  loading: () => <div className="h-[72px]" />,
});

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default ClientLayout;
