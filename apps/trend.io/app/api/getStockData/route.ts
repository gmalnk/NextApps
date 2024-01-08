// app/api/route.js

import { NextResponse } from "next/server";
import getStockData from "db/functions/stockDataFetcher";
// Handles GET requests to /api
export async function GET(request: Request) {
  console.log(request.body);
  //     if (request?.body && request.body?.timeFrame &&){

  //   const data = await getStockData({ timeFrame:request?.body?.timeFrame, token: request?.body?.token });
  //     }
  //   return NextResponse.json({ data });
}

// Handles POST requests to /api
export async function POST(request: Request) {
  console.log(request.body);
  // ...
  return NextResponse.json({ message: "Hello World" });
}
