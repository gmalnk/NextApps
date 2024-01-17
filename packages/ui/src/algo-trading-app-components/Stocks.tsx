"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/resizable";
import { ScrollArea } from "../../components/ui/scroll-area";
import StockList from "./StockList";
import Chart from "./Chart";

export default function Stocks() {
  return (
    <div className="flex h-full">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={85} className="rounded-t-md bg-white">
          <Chart />
        </ResizablePanel>
        <ResizableHandle className="w-1" />
        <ResizablePanel defaultSize={15} className="rounded-tl-md bg-white">
          <ScrollArea className="w-full h-full">
            <StockList />
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
