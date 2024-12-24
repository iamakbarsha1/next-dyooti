// "use client";

// import React from "react";
// import dynamic from "next/dynamic";
// import Sidebar from "./component/Sidebar";

// const Navbar = dynamic(() => import("./component/Navbar"), {
//   ssr: false,
//   loading: () => <div className="h-[72px]" />,
// });

// const ClientLayout = ({ children }: { children: React.ReactNode }) => {
//   const [showSidebar, setShowSidebar] = React.useState<boolean>(false);
//   return (
//     <main className="relative">
//       <section className="absolute top-0 left-0 z-50 w-fit h-screen lg:hidden">
//         {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
//       </section>
//       <Navbar setShowSidebar={setShowSidebar} />
//       {children}
//     </main>
//   );
// };

// export default ClientLayout;

"use client";

import React from "react";
import dynamic from "next/dynamic";
import Sidebar from "./component/Sidebar";

const Navbar = dynamic(() => import("./component/Navbar"), {
  ssr: false,
  loading: () => <div className="h-[54px]" />,
});

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = React.useState<boolean>(false);

  const closeSidebar = () => setShowSidebar(false);

  return (
    <main className="relative">
      {/* Overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity"
          onClick={closeSidebar}
        />
      )}

      <section
        className={`fixed top-0 left-0 z-50 h-screen bg-white shadow-lg transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <Sidebar setShowSidebar={setShowSidebar} />
      </section>

      <Navbar setShowSidebar={setShowSidebar} />
      <main className="relative">{children}</main>
    </main>
  );
};

export default ClientLayout;
