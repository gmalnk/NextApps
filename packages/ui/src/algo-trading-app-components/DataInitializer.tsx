"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { userIdState } from "store/atoms/trend.io";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userWishListState } from "store/atoms/trend.io";
import { getWishListData } from "utils/trend.io";

type User = {
  id?: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

type Session = {
  user?: User | null | undefined;
};

export default function DataInitializer() {
  const setUserId = useSetRecoilState(userIdState);
  const setWishlist = useSetRecoilState(userWishListState);

  // Assuming useSession provides the user object with an 'id' property
  const { data: session } = useSession() as {
    data?: Session | null | undefined;
  };

  useEffect(() => {
    const userId = session?.user?.id as string;

    const setWishListForUser = async () => {
      const wishList = await getWishListData(userId);
      // console.log(wishList);
      setWishlist(wishList);
    };

    if (userId) {
      // console.log(userId);
      userId && setUserId(userId);
      setWishListForUser();
    }
  }, [session]);

  useEffect(() => {}, []);

  return <></>;
}
