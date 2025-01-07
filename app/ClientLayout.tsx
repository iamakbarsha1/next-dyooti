// // "use client";

// // import React from "react";
// // import dynamic from "next/dynamic";
// // import Sidebar from "./component/Sidebar";

// // const Navbar = dynamic(() => import("./component/Navbar"), {
// //   ssr: false,
// //   loading: () => <div className="h-[72px]" />,
// // });

// // const ClientLayout = ({ children }: { children: React.ReactNode }) => {
// //   const [showSidebar, setShowSidebar] = React.useState<boolean>(false);
// //   return (
// //     <main className="relative">
// //       <section className="absolute top-0 left-0 z-50 w-fit h-screen lg:hidden">
// //         {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
// //       </section>
// //       <Navbar setShowSidebar={setShowSidebar} />
// //       {children}
// //     </main>
// //   );
// // };

// // export default ClientLayout;

// "use client";

// import React from "react";
// import dynamic from "next/dynamic";
// import Sidebar from "./component/Sidebar";

// const Navbar = dynamic(() => import("./component/Navbar"), {
//   ssr: false,
//   loading: () => <div className="h-[54px]" />,
// });

// const ClientLayout = ({ children }: { children: React.ReactNode }) => {
//   const [showSidebar, setShowSidebar] = React.useState<boolean>(false);

//   const closeSidebar = () => setShowSidebar(false);

//   return (
//     <main className="relative">
//       {/* Overlay */}
//       {showSidebar && (
//         <div
//           className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity"
//           onClick={closeSidebar}
//         />
//       )}

//       <section
//         className={`fixed top-0 left-0 z-50 h-screen bg-white shadow-lg transform ${
//           showSidebar ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out lg:hidden`}
//       >
//         <Sidebar setShowSidebar={setShowSidebar} />
//       </section>

//       <section className="sticky top-0 z-50">
//         <Navbar setShowSidebar={setShowSidebar} />
//       </section>
//       <main className="relative">{children}</main>
//     </main>
//   );
// };

// export default ClientLayout;

"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Sidebar from "./component/Sidebar";
import { throttle } from "./utils/function";
import Footer from "./component/Footer";

const Navbar = dynamic(() => import("./component/Navbar"), {
  ssr: false,
  loading: () => <div className="h-[54px]" />,
});

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  // Handle scroll direction
  useEffect(() => {
    const throttledHandleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      setLastScrollY(currentScrollY);
    }, 100); // Adjust delay as needed

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [lastScrollY]);

  const closeSidebar = () => setShowSidebar(false);

  const handleOverlayClick = React.useCallback(() => {
    closeSidebar();
  }, []);

  return (
    <main className="relative">
      {/* Overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity"
          onClick={handleOverlayClick}
        />
      )}

      {/* Sidebar */}
      <section
        className={`fixed top-0 left-0 z-50 h-screen bg-white shadow-lg transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <Sidebar setShowSidebar={setShowSidebar} />
      </section>

      {/* Navbar with scroll logic */}
      <section
        className={`fixed top-0 left-0 w-full z-40 transition-transform duration-300 ${
          isScrollingUp ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar setShowSidebar={setShowSidebar} />
      </section>

      {/* Children with padding to account for navbar height */}
      <main className="relative pt-[54px] lg:pt-[116px]">{children}</main>
      <Footer />
    </main>
  );
};

export default ClientLayout;
