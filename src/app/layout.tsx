import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";

const afacadFlux = localFont({
  src: "./fonts/AfacadFlux.ttf",
  variable: "--font-afacad-flux",
  weight: "100 200 300 400 500 600 700 800 900",
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Muh Abdul Azis - Portfolio Website",
  description: "Muh Abdul Azis - Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${afacadFlux.variable} ${poppins.className} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster richColors/>
      </body>
    </html>
  );
}
