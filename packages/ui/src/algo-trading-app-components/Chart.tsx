"use client";
import {
  CandlestickData,
  ChartOptions,
  DeepPartial,
  LineStyleOptions,
  SeriesOptionsCommon,
  Time,
  createChart,
} from "lightweight-charts";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { showTrendlineState } from "store/atoms/showTrendline";
import { stockDataState } from "store/atoms/stockData";

export const chartoptions = {
  layout: {
    textColor: "black",
    background: { type: "black", color: "white" },
  },
  grid: {
    vertLines: {
      color: "rgba(197, 203, 206, 0)",
    },
    horzLines: {
      color: "rgba(197, 203, 206, 0)",
    },
  },
  timeScale: {
    timeVisible: true,
    secondsVisible: true,
  },
  crosshair: {
    mode: 0,
  },
  autoSize: false,
  handleScrool: {
    vertTouchDrag: true,
  },
};

export const candleoptions = {
  upColor: "#26a69a",
  downColor: "#ef5350",
  borderVisible: false,
  wickUpColor: "#26a69a",
  wickDownColor: "#ef5350",
};

export const lineoptions = {
  color: "rgba(45, 85, 255, 1)",
  lineWidth: 0.7,
  crosshairMarkerVisible: true,
};

export const timeScaleOptions = {
  barSpacing: 5,
};

export default function Chart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const trendlineData: any = [];
  const showTrendline = useRecoilValue(showTrendlineState);
  const stockData = useRecoilValue(stockDataState);
  useEffect(() => {
    const handleResize = () => {
      // console.log(chartContainerRef.current);
      chart.applyOptions({
        width: chartContainerRef.current?.clientWidth,
        height: window.innerHeight - 48,
      });
    };

    const chart = createChart(
      chartContainerRef.current as HTMLElement,
      {
        ...chartoptions,
        width: chartContainerRef.current?.clientWidth,
        height: window.innerHeight - 48,
      } as DeepPartial<ChartOptions>
    );

    chart.timeScale().applyOptions(timeScaleOptions);

    if (showTrendline) {
      trendlineData.forEach((line: any) => {
        chart
          .addLineSeries(
            lineoptions as DeepPartial<LineStyleOptions & SeriesOptionsCommon>
          )
          .setData(line);
      });
    }
    const candleSeries = chart.addCandlestickSeries(candleoptions);
    // console.log("candleSeries", candleSeries);
    // console.log("stockData", stockData);
    stockData && candleSeries?.setData(stockData as CandlestickData<Time>[]);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [stockData]);

  return (
    <>
      <div
        id="chart-container"
        className="border-gray-500 rounded-r-md border-[2px] "
        ref={chartContainerRef}
      />
    </>
  );
}
