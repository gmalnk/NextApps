"use client";
import { stocksDict } from "./StockBar";
import clsx from "clsx";
import { Bookmark } from "lucide-react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tokenState } from "store/selectors/token";
import { stockConfigState } from "store/atoms/trend.io";

export default function StockList() {
  const currentToken = useRecoilValue(tokenState);
  const setStockConfig = useSetRecoilState(stockConfigState);
  const handleOnclickStockList = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).hasAttribute("data-token")) {
      setStockConfig((value) => ({
        ...value,
        token: (e.target as HTMLInputElement).getAttribute(
          "data-token"
        ) as string,
      }));
    }
  };
  return (
    <div
      className="flex flex-col flex-auto h-full bg-gray-200"
      onClick={(e) => handleOnclickStockList(e)}
    >
      {Object.keys(stocksDict).map((key: string) => {
        return (
          <div
            key={key}
            id={key}
            data-token={key}
            className={clsx(
              "py-1 px-2 mb-1 font-light hover:cursor-pointer rounded-md flex justify-start items-center",
              {
                "text-white bg-blue-500": key == currentToken,
                " bg-white text-black hover:bg-gray-100": key !== currentToken,
              }
            )}
          >
            <Bookmark
              className={clsx("w-5 h-5 stroke-1 text-neutral-600", {
                " fill-yellow-300": parseInt(key) % 2 === 0,
                " fill-red-500": parseInt(key) % 3 === 0,
                "fill-green-500 ": parseInt(key) % 5 === 0,
                "fill-pink-500 ": parseInt(key) % 7 === 0,
              })}
            />
            <p className="ml-2">{stocksDict[key]}</p>
          </div>
        );
      })}
    </div>
  );
}
