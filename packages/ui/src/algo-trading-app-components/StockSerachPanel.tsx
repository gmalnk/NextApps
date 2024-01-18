"use client";
import React, { useState, useEffect } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { stocksDict } from "./StockBar";
import { ScrollArea } from "../../components/ui/scroll-area";
import { useSetRecoilState } from "recoil";
import { tokenState } from "store/selectors/token";

export default function StockSerachPanel() {
  const setToken = useSetRecoilState(tokenState);
  const [searchSymbol, setSearchSymbol] = useState("");
  const [searchList, setSearchList] = useState(Object.keys(stocksDict));

  const handleOnclick = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickedElement = e.target as HTMLDivElement;
    if (
      clickedElement.tagName === "P" &&
      clickedElement.hasAttribute("data-token")
    ) {
      setToken(clickedElement.getAttribute("data-token") as string);
    }
  };

  const handleChangeSymbol = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchSymbol(e.target.value?.toUpperCase());
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredKeys = Object.keys(stocksDict).filter((key) => {
        return stocksDict[key]?.includes(searchSymbol);
      });
      //   console.log(filteredKeys.length);
      if (filteredKeys.length === 0) {
        setSearchList(Object.keys(stocksDict).slice(0, 20));
      } else {
        setSearchList(
          filteredKeys.length <= 20 ? filteredKeys : filteredKeys.splice(0, 20)
        );
      }
      //   console.log("executed debounce");
    }, 300);
    return () => clearTimeout(debounce);
  }, [searchSymbol]);

  return (
    <DialogContent className=" min-h-[500px]">
      <DialogHeader>
        <DialogTitle className=" mb-4">Symbol Search</DialogTitle>
        <div>
          <Input
            className=" ring-blue-600"
            type="search mb-4"
            placeholder="Stock Symbol"
            value={searchSymbol}
            onChange={handleChangeSymbol}
          />
        </div>
        <ScrollArea className=" h-[400px] pt-4">
          <div className="flex flex-col gap-2 h-full" onClick={handleOnclick}>
            {searchList.map((item) => {
              return (
                <DialogClose key={item} className=" justify-start">
                  <p
                    className=" w-full bg-gray-50 py-1 px-8 rounded-xl hover:bg-blue-200 hover:cursor-pointer text-left"
                    key={item}
                    data-token={item}
                  >
                    {stocksDict[item]}
                  </p>
                </DialogClose>
              );
            })}
          </div>
        </ScrollArea>
      </DialogHeader>
    </DialogContent>
  );
}
