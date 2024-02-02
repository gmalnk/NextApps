import { useRef, useEffect } from "react";
import {
  CandlestickData,
  ChartOptions,
  DeepPartial,
  LineStyleOptions,
  SeriesOptionsCommon,
  Time,
  createChart,
  IChartApi,
} from "lightweight-charts";
import { StockData, TrendlineData } from "store/atoms/trend.io";

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

export default function useChart(
  stockData: StockData,
  showTrendline: boolean,
  trendlineData: TrendlineData[]
) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  let chart: IChartApi;
  let candleSeries;

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current?.clientWidth,
        height: window.innerHeight - 58,
      });
    };

    chart = createChart(
      chartContainerRef.current as HTMLElement,
      {
        ...chartoptions,
        width: chartContainerRef.current?.clientWidth,
        height: window.innerHeight - 58,
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
    candleSeries = chart.addCandlestickSeries(candleoptions);
    // console.log("candleSeries", candleSeries);
    // console.log("stockData", stockData);
    stockData && candleSeries?.setData(stockData as CandlestickData<Time>[]);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [stockData]);

  return [chartContainerRef];
}
