import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilContextProvider from "@repo/ui/src/common/RecoilContextProvider";
import { NextAuthProvider } from "@repo/ui/src/common/NextAuthProvider";
import DataInitializer from "@repo/ui/src/algo-trading-app-components/DataInitializer";
import "db/test";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trend.io",
  description:
    "Empower your trades with precision using our cutting-edge app! Our AI-driven platform employs advanced neural network models to generate algorithmically crafted trendlines, delivering informed insights that are ranked for accuracy. Stay ahead of market trends and make confident decisions with our intuitive tool, designed to enhance your trading experience.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <RecoilContextProvider>
            {children}
            <DataInitializer />
          </RecoilContextProvider>{" "}
        </NextAuthProvider>
      </body>
    </html>
  );
}
