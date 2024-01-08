"use server";
import { session } from "../utils/smartAPI";

export default async function getStockData({
  token,
  timeFrame,
}: {
  token: string;
  timeFrame: string;
}) {
  let currentDate = new Date();
  const sessionData = await session;
  // console.log("sessionData", sessionData);

  const response = await fetch(process.env.API_URL as string, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      Accept: process.env.API_Accept,
      "Accept-Encoding": process.env.API_Accept_Encoding,
      "Accept-Language": process.env.API_Accept_Language,
      "Content-Type": process.env.API_Content_Type,
      Origin: process.env.API_Origin,
      Referer: process.env.API_Referer,
      "Sec-Ch-Ua-Mobile": process.env.API_Sec_Ch_Ua_Mobile,
      "Sec-Ch-Ua-Platform": process.env.API_Sec_Ch_Ua_Platform,
      "Sec-Fetch-Dest": process.env.API_Sec_Fetch_Dest,
      "Sec-Fetch-Mode": process.env.API_Sec_Fetch_Mode,
      "Sec-Fetch-Site": process.env.API_Sec_Fetch_Site,
      "User-Agent": process.env.API_User_Agent,
      "X-Consumer": process.env.API_X_Consumer,
      "X-Correlation-Id": process.env.API_X_Correlation_Id,
      "X-Access-Token": sessionData?.data?.refreshToken,
    } as HeadersInit,
    body: JSON.stringify({
      action: "Req",
      bars: parseInt(process.env.NB_BARS as string),
      duration: parseInt(timeFrame.slice(0, timeFrame.length - 1) as string),
      period: "I",
      rtype: "OHLCV",
      sort: "ASC",
      to: `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${currentDate
        .getDate()
        .toString()
        .padStart(2, "0")}T${currentDate
        .getHours()
        .toString()
        .padStart(2, "0")}:${currentDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${currentDate
        .getSeconds()
        .toString()
        .padStart(2, "0")}.${currentDate
        .getMilliseconds()
        .toString()
        .padStart(3, "0")}+05:30`,
      topic: ("1." + token) as string,
      type: timeFrame[timeFrame.length - 1],
    }),
  }).then((data: any) => {
    return data;
  });
  if (response.ok) {
    console.log("response is ok");
    let data = await response.json();
    // console.log("data", data.slice(0, 5));
    data = data.map(
      (item: {
        time: number;
        open: Number;
        high: Number;
        low: Number;
        close: Number;
      }) => ({
        ...item,
        time: item.time / 1000 + 19800,
        // time: new Date(item.time).toISOString().slice(0, 16).replace("T", " "),
      })
    );
    return data;
  } else {
    console.error("Error:", response.statusText);
    return [];
  }
}
