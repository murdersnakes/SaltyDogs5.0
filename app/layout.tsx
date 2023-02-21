import { Yanone_Kaffeesatz, Assistant } from "@next/font/google";
import React from "react";
import "../styles/globals.css";
import Footer from "./(components)/Footer";
import Navbar from "./(components)/Navbar";

const headFont = Yanone_Kaffeesatz({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-head",
});

const bodyFont = Assistant({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-body",
});

export default function layout({ children }: { children: React.ReactNode })  {
  return (
    <html lang='en' className={`${headFont.variable} ${bodyFont.variable}`}>
      <body className='min-h-screen grad-light text-neutral-800 flex flex-col justify-between'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
