import axios from "axios";
export const trendIOAPI = axios.create({
  baseURL: "http://13.126.174.34/api/v1/trend.io",
});
