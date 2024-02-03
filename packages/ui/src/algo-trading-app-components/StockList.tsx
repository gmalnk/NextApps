"use client";
import { stocksDict } from "./StockBar";
import clsx from "clsx";
import { Bookmark } from "lucide-react";
import { useRecoilState, useRecoilValue } from "recoil";
import { tokenState } from "store/selectors/token";
import { useState } from "react";
import WishlistAdder from "./WishlistAdder";
import {
  WishList,
  WishListValue,
  stockListState,
  userWishListState,
} from "store/atoms/trend.io";
import { wishListColorOptions } from "./WishlistAdder";

export default function StockList() {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useRecoilState(tokenState);
  const userWishList: WishList = useRecoilValue(userWishListState);
  const stockList: string[] = useRecoilValue(stockListState);

  const handleOnclickStockList = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).hasAttribute("data-token")) {
      setToken(
        (e.target as HTMLInputElement).getAttribute("data-token") as string
      );
    }
  };

  return (
    <div
      className="bg-gray-200 flex flex-col"
      onClick={(e) => handleOnclickStockList(e)}
    >
      {stockList.map((key: string) => {
        return (
          <div
            key={key}
            id={key}
            data-token={key}
            className={clsx(
              "py-1 px-2 mb-1 font-light hover:cursor-pointer rounded-md flex justify-start items-center",
              {
                "text-white bg-blue-500": key == token,
                " bg-white text-black hover:bg-gray-100": key !== token,
              }
            )}
          >
            <WishlistAdder
              token={key}
              wishListItem={
                userWishList && Object.keys(userWishList).includes(key)
                  ? ({ ...userWishList[key] } as WishListValue)
                  : undefined
              }
            >
              <Bookmark
                className={`w-5 h-5 stroke-1 text-neutral-600 hover:cursor-pointer ${
                  wishListColorOptions[
                    (userWishList && userWishList[key]?.category) || "none"
                  ]
                }`}
              />
            </WishlistAdder>
            <p className="ml-2" data-token={key}>
              {stocksDict[key]}
            </p>
          </div>
        );
      })}
    </div>
  );
}
