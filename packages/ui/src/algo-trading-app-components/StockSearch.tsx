"use client";
import { Search } from "lucide-react";
import { stocksDict } from "./StockBar";
import { useRecoilValue } from "recoil";
import { tokenState } from "store/selectors/token";

export default function StockSerach() {
  const token = useRecoilValue(tokenState);
  return (
    <div className="flex gap-1 justify-start items-center w-fit hover:bg-blue-500 p-1 rounded-md pr-2 hover:cursor-pointer relative left-0">
      <Search className="w-5 h-5 stroke-1 text-neutral-900" />
      <p>{stocksDict[token]}</p>
    </div>
  );
}
