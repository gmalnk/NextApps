import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "../../components/NextAuthProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix-clone",
  description:
    "A Next.js-powered Netflix clone for showcasing immersive UI/UX experiences, seamless navigation, and dynamic content loading in the world of web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
