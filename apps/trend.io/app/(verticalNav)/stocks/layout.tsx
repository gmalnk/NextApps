import StockBar from "@repo/ui/src/algo-trading-app-components/StockBar";
import { ReactNode } from "react";
export default function Stockslayout({ children }: { children: ReactNode }) {
  return (
    <>
      <StockBar />
      {children}
    </>
  );
}
