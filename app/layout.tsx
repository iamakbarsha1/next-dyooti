import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import dynamic from "next/dynamic";
import TheLayout from "./TheLayout";
// Dynamic import of TheLayout to prevent hydration issues
// const TheLayout = dynamic(() => import("./TheLayout"), {
//   ssr: false,
// });

// const gilroy = localFont({
//   src: "../public/fonts/gilroy-medium.ttf",
//   // variable: "--font-gilroy-light",
//   weight: "100 900",
//   // fallback: ["Arial", "sans-serif"], // Add fallback fonts
// });

// const gilroyLight = localFont({
//   src: "../public/fonts/Gilroy-Light.otf",
//   variable: "--font-gilroy-light",
//   weight: "100", // Define the specific weight
// });
// const gilroyNormal = localFont({
//   src: "../public/fonts/gilroy-medium.ttf",
//   variable: "--font-gilroy-normal",
//   weight: "600", // Define the specific weight
// });

// const gilroyExtraBold = localFont({
//   src: "../public/fonts/Gilroy-ExtraBold.otf",
//   variable: "--font-gilroy-bold",
//   weight: "800", // Define the specific weight
// });

const gilroyLight = localFont({
  src: "../public/fonts/Gilroy-Light.otf",
  variable: "--font-gilroy-light",
  weight: "300",
});

const gilroyNormal = localFont({
  src: "../public/fonts/gilroy-medium.ttf",
  variable: "--font-gilroy-normal",
  weight: "400",
});

const gilroyExtraBold = localFont({
  src: "../public/fonts/Gilroy-ExtraBold.otf",
  variable: "--font-gilroy-bold",
  weight: "800",
});

// const gilroy = localFont({
//   src: "./fonts/Gilroy-Light.otf",
//   variable: "--font-gilroy-light",
//   weight: "100",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Dyooti - ServiceNow Partner",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ${gilroyLight.variable} ${gilroyExtraBold.variable}
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* max-w-7xl max-w-[1500px] */}
      <body
        className={`${gilroyLight.variable} ${gilroyExtraBold.variable} ${gilroyNormal.variable} font-gilroy-normal antialiased w-full h-full bg-white mx-auto box-border`}
      >
        {/* <body
        className={`${gilroy.variable} antialiased w-full h-full bg-white mx-auto box-border`}
      > */}
        <TheLayout>{children}</TheLayout>
      </body>
    </html>
  );
}
