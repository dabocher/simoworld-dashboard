import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Sidevar from "@/components/Sidevar";
import Header from "@/components/Header";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Simoworld",
  description: "Bienvenida / o al planificador de eventos para simracers",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="bg-[#E1Dadb]">
      <body className={`${quicksand.className} relative pt-8  bg-[#E1Dadb] `}>
        <Header />
        <Sidevar />

        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
