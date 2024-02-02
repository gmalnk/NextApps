"use client";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  showTrendlineState,
  stockDataState,
  TrendlineData,
} from "store/atoms/trend.io";
import useChart from "hooks/trend.io/useChart";
import useStockData from "hooks/trend.io/useStockData";
import { timeFrameState } from "store/selectors/timeFrame";
import { tokenState } from "store/selectors/token";

export default function Chart() {
  const trendlineData = [] as unknown as TrendlineData[];
  const showTrendline = useRecoilValue(showTrendlineState);
  const timeFrame = useRecoilValue(timeFrameState);
  const token = useRecoilValue(tokenState);
  const [stockData, setStockData] = useRecoilState(stockDataState);

  const [chartContainerRef] = useChart(stockData, showTrendline, trendlineData);
  useStockData(setStockData, timeFrame, token);
  return (
    <div
      id="chart-container"
      className="border-gray-500 w-full h-full rounded-t-md border-[2px]"
      ref={chartContainerRef}
    />
  );
}
