"use client";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Bookmark } from "lucide-react";
import { ScrollArea } from "../../components/ui/scroll-area";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  listOptionState,
  stockListState,
  userWishListState,
} from "store/atoms/trend.io";
import {
  NIFTY_50,
  NIFTY_100,
  NIFTY_200,
  NIFTY_500,
  NIFTY_1000,
  ALL_TOKENS,
} from "utils/trend.io";

const availableOptions = [
  {
    lable: "All Stocks",
    value: "all",
    icon: (
      <Bookmark className="w-5 h-5 stroke-1 text-neutral-600 fill-white"></Bookmark>
    ),
  },
  {
    lable: "Nifty-50",
    value: "nifty-50",
    icon: (
      <Bookmark className="w-5 h-5 stroke-1 text-neutral-600 fill-white"></Bookmark>
    ),
  },
  {
    lable: "Nifty-100",
    value: "nifty-100",
    icon: (
      <Bookmark className="w-5 h-5 stroke-1 text-neutral-600 fill-white"></Bookmark>
    ),
  },
  {
    lable: "Nifty-200",
    value: "nifty-200",
    icon: (
      <Bookmark className="w-5 h-5 stroke-1 text-neutral-600 fill-white"></Bookmark>
    ),
  },
  {
    lable: "Nifty-500",
    value: "nifty-500",
    icon: (
      <Bookmark className="w-5 h-5 stroke-1 text-neutral-600 fill-white"></Bookmark>
    ),
  },
  {
    lable: "Nifty-1000",
    value: "nifty-1000",
    icon: (
      <Bookmark className="w-5 h-5 stroke-1 text-neutral-600 fill-white"></Bookmark>
    ),
  },
  {
    lable: "Red list",
    value: "red",
    icon: (
      <Bookmark className="w-5 h-5 stroke-1 text-neutral-600 fill-red-500"></Bookmark>
    ),
  },
  {
    lable: "Green list",
    value: "green",
    icon: (
      <Bookmark className="w-5 h-5 stroke-1 text-neutral-600 fill-green-500"></Bookmark>
    ),
  },
  {
    lable: "Black list",
    value: "black",
    icon: (
      <Bookmark className="w-5 h-5 stroke-1 text-neutral-600 fill-black"></Bookmark>
    ),
  },
  {
    lable: "Blue list",
    value: "blue",
    icon: (
      <Bookmark className="w-5 h-5 stroke-1 text-neutral-600 fill-blue-500"></Bookmark>
    ),
  },
  {
    lable: "Yellow list",
    value: "yellow",
    icon: (
      <Bookmark className="w-5 h-5 stroke-1 text-neutral-600 fill-yellow-500"></Bookmark>
    ),
  },
  {
    lable: "Pink list",
    value: "pink",
    icon: (
      <Bookmark className="w-5 h-5 stroke-1 text-neutral-600 fill-pink-500"></Bookmark>
    ),
  },
];

export default function ListOptions() {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useRecoilState(listOptionState);
  const setStockList = useSetRecoilState(stockListState);
  const userWishList = useRecoilValue(userWishListState);

  const getStockList = (category: string): string[] => {
    const list: string[] = [];
    Object.keys(userWishList).forEach((key) => {
      if (userWishList[key]?.category === category) {
        list.push(key);
      }
    });
    return list;
  };

  useEffect(() => {
    switch (option) {
      case "all":
        setStockList(ALL_TOKENS);
        return;
      case "nifty-50":
        setStockList(NIFTY_50);
        return;
      case "nifty-100":
        setStockList(NIFTY_100);
        return;
      case "nifty-200":
        setStockList(NIFTY_200);
        return;
      case "nifty-500":
        setStockList(NIFTY_500);
        return;
      case "nifty-1000":
        setStockList(NIFTY_1000);
        return;
      default:
        setStockList(getStockList(option));
        return;
    }
  }, [option, userWishList]);

  return (
    <div className=" h-10 p-2 pl-4 text-left font-medium text-lg bg-white rounded-l-md border border-gray-600">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className=" hover:font-semibold">
          <div className=" h-full w-full flex flex-row justify-start items-center gap-2">
            <span>
              {
                availableOptions.filter((item) => {
                  return item.value == option;
                })[0]?.lable
              }
            </span>
            {
              availableOptions.filter((item) => {
                return item.value == option;
              })[0]?.icon
            }
          </div>
        </PopoverTrigger>
        <PopoverContent className=" w-[200px] h-[300px] px-2 py-1 pt-2 bg-gray-200 p-[2px] ">
          <ScrollArea className=" w-full h-full">
            <div className=" flex flex-col gap-1">
              {availableOptions.map((item) => {
                return (
                  <div
                    id="item"
                    className=" bg-white rounded-md pl-2 pr-4 py-2 hover:cursor-pointer hover:bg-slate-100 flex flex-row justify-between items-center"
                    key={item.value}
                    onClick={(e) => {
                      const clickedElement = e.target as Element;
                      console.log(clickedElement);
                      if (clickedElement.closest("#item")) {
                        setOption(item.value);
                        setOpen(false);
                      }
                    }}
                  >
                    <span>{item.lable}</span>
                    <span>{item.icon}</span>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
}
