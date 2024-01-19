import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@repo/ui/src/portfolio/Header";
import Footer from "@repo/ui/src/portfolio/Footer";
import ThemeSwitchButton from "@repo/ui/src/portfolio/ThemeSwitchButton";
import RecoilContectProvider from "@repo/ui/src/common/RecoilContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anil's Portfolio",
  description:
    "Full Stack Developer Portfolio of GORAM ANIL NAYAK. Created using ReactJS, NextJs, TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilContectProvider>
      <html
        lang="en"
        className="!scroll-smooth bg-gray-50 text-gray-950 m-0 p-0 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
      >
        <body className="bg-gray-50 text-gray-950 m-0 p-0 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
          <div className=" bg-gray-50 text-gray-950  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 relative pt-28 sm:pt-44">
            <Header />
            {children}
            <Footer />

            {/* <Toaster position="top-right" /> */}
            <ThemeSwitchButton />
          </div>
        </body>
      </html>
    </RecoilContectProvider>
  );
}
