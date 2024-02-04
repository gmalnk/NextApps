import axios from "axios";
export const trendIOAPI = axios.create({
  baseURL: "https://trend.io.kstar.us/api/v1/trend.io",
});
