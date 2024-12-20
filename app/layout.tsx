import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/Navbar";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl w-full h-full bg-zinc-100 mx-auto box-border`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
