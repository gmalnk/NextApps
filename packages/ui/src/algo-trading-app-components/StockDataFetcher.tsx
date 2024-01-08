"use client";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import getStockData from "db/functions/stockDataFetcher";
import { stockDataState } from "store/atoms/stockData";
import { timeFrameState } from "store/selectors/timeFrame";
import { tokenState } from "store/selectors/token";

export default async function StockDataFetcher() {
  console.log("hello");
  const timeFrame = useRecoilValue(timeFrameState);
  const token = useRecoilValue(tokenState);
  const setStockData = useSetRecoilState(stockDataState);
  // useEffect(() => {
  //   async function stockDataSetter(timeFrame: string, token: string) {
  //     const data: any = await getStockData({ token, timeFrame });
  //     if (data) {
  //       console.log("setting stock data");
  //       setStockData(data);
  //     }
  //   }
  //   stockDataSetter(timeFrame, token);
  // }, [timeFrame, token]);

  return <></>;
}
