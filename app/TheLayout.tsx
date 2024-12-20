// import React from "react";
// import dynamic from "next/dynamic";
// import Navbar from "./component/Navbar";

// // Dynamically import Navbar to render it only on the client-side
// // const Navbar = dynamic(() => import("./component/Navbar"), { ssr: false });

// const TheLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <main>
//       {/* Render Navbar only on the client-side */}
//       <Navbar />
//       {children}
//     </main>
//   );
// };

// export default TheLayout;
// TheLayout.tsx
// import Navbar from "./component/Navbar";

// const TheLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <main>
//       <Navbar />
//       {children}
//     </main>
//   );
// };

// export default TheLayout;
// TheLayout.tsx
import React from "react";
import ClientLayout from "./ClientLayout";

const TheLayout = ({ children }: { children: React.ReactNode }) => {
  return <ClientLayout>{children}</ClientLayout>;
};

export default TheLayout;
