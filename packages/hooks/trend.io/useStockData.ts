import React from "react";
import { useEffect } from "react";
import { stocksDict } from "@repo/ui/src/algo-trading-app-components/StockBar";
export const headers = {
  Accept: "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "en-US,en;q=0.9",
  Origin: "https://www.moneycontrol.com",
  Referer: "https://www.moneycontrol.com/",
  "Sec-Ch-Ua-Mobile": "?0",
  "Sec-Ch-Ua-Platform": "Windows",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-site",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
};

const getResolution = (timeFrame: string) => {
  switch (timeFrame) {
    case "15m":
      return "15";
    case "30m":
      return "30";
    case "1h":
      return "60";
    default:
      return "1D";
  }
};

export default function useStockData(
  setStockData: any,
  timeFrame: string,
  token: string
) {
  useEffect(() => {
    const getData = async () => {
      try {
        const params: { [key: string | number]: string | number } = {
          symbol: stocksDict[token],
          resolution: getResolution(timeFrame),
          from: Math.floor(Date.now() / 1000),
          countback: 20000,
          to: Math.floor(Date.now() / 1000),
          currencyCode: "INR",
        };

        const queryString = Object.keys(params)
          .map((key) => `${key}=${params[key]}`)
          .join("&");
        const url = `https://priceapi.moneycontrol.com/techCharts/indianMarket/stock/history?${queryString}`;

        // console.log(url);
        const response = await fetch(url, {
          method: "GET",
          headers,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const rawData = await response.json();
        const data = rawData.t.map((time: number, index: number) => ({
          time: time,
          open: rawData["o"][index],
          high: rawData["h"][index],
          low: rawData["l"][index],
          close: rawData["c"][index],
        }));
        // console.log("data", data);

        setStockData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [timeFrame, token]);
}
