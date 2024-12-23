import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import dynamic from "next/dynamic";
import TheLayout from "./TheLayout";
// Dynamic import of TheLayout to prevent hydration issues
// const TheLayout = dynamic(() => import("./TheLayout"), {
//   ssr: false,
// });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dyooti - ServiceNow Partner",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* max-w-7xl max-w-[1500px] */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full bg-white mx-auto box-border`}
      >
        <TheLayout>{children}</TheLayout>
      </body>
    </html>
  );
}
