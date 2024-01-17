import { ReactNode } from "react";
import VerticalNavBar from "@repo/ui/src/algo-trading-app-components/VerticalNavBar";
export default function NaviagationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex w-full h-screen  bg-gray-200">
      <VerticalNavBar />
      <div className="flex flex-col flex-grow basis-auto h-screen">
        {children}
      </div>
    </div>
  );
}
