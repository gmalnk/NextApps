"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/resizable";
import { ScrollArea } from "../../components/ui/scroll-area";
import StockList from "./StockList";
import Chart from "./Chart";
import ListOptions from "./ListOptions";
import { Separator } from "../../components/ui/separator";

export default function Stocks() {
  return (
    <div className="h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={85} className="rounded-t-md bg-white">
          <Chart />
        </ResizablePanel>
        <ResizableHandle className="w-1" />
        <ResizablePanel defaultSize={15} className="rounded-tl-md bg-white">
          <div className=" pb-1 rounded-md bg-gray-200">
            <ListOptions />
          </div>
          <ScrollArea className="w-full h-full ">
            <StockList />
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
