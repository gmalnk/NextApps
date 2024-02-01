"use client";
import React, { ReactNode, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Bookmark } from "lucide-react";
import { trendIOAPI } from "utils/axiosProviders";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  WishListValue,
  userIdState,
  userWishListState,
} from "store/atoms/trend.io";

export const wishListColorOptions: { [key: string]: string } = {
  none: "",
  red: "fill-red-500",
  green: "fill-green-500",
  black: "fill-black",
  blue: "fill-blue-500",
  yellow: "fill-yellow-500",
  pink: "fill-pink-500",
};

export default function WishlistAdder({
  children,
  token,
  wishListItem,
}: {
  children: ReactNode;
  token: string;
  wishListItem: WishListValue | undefined;
}) {
  const [open, setOpen] = useState(false);
  const userId = useRecoilValue(userIdState);
  const setWishlist = useSetRecoilState(userWishListState);

  const updateWishlist = async (category: string) => {
    console.log("wishListItem", wishListItem);
    const wishlistPromise =
      wishListItem !== undefined
        ? await trendIOAPI.put(`/wishlist/${userId}`, {
            id: wishListItem.id,
            category,
          })
        : await trendIOAPI.post(`/wishlist/${userId}`, {
            token: parseInt(token),
            category,
          });
    const newWishlistItem: { id: number; token: number; category: string } =
      await wishlistPromise.data;

    console.log("newWishlistItem from WishlistAdder", newWishlistItem);
    if (newWishlistItem) {
      console.log("console.log before setting the new wishlist");
      setWishlist((prev) => {
        return {
          ...prev,
          [token]: {
            id: newWishlistItem.id,
            category: newWishlistItem.category,
          },
        };
      });
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="bg-gray-100 p-2 w-fit h-fit" align="start">
        <div className=" flex gap-2 ">
          {Object.keys(wishListColorOptions).map((item) => {
            return (wishListItem && wishListItem.category === item) ||
              item === "none" ? null : (
              <Bookmark
                key={item}
                className={`${wishListColorOptions[item]} w-5 h-5 stroke-1 text-neutral-600 hover:cursor-pointer`}
                onClick={() => {
                  updateWishlist(item);
                  setOpen(false);
                }}
              />
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
