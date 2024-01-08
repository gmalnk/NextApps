import { ReactNode } from "react";
import HorizontalNavBar from "@repo/ui/src/algo-trading-app-components/HorizontalNavBar";

export default function NaviagationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <HorizontalNavBar />
      <div>{children}</div>
    </>
  );
}
