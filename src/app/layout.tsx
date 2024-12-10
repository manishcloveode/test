import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { Vesper_Libre, Sofia_Sans } from "next/font/google";

const vesperLibre = Vesper_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-vesper-libre",
});

const sofiaSans = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sofia-sans",
});

export const metadata: Metadata = {
  title: "Wabais",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vesperLibre.variable} ${sofiaSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
