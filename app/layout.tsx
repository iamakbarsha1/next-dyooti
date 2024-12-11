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
  title: "Micro Mart",
  description: "transforming small scale marts to large scale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl bg-zinc-100 mx-auto box-border`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
