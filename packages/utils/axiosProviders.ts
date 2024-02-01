import axios from "axios";
export const trendIOAPI = axios.create({
  baseURL: "http://localhost:3001/api/v1/trend.io",
});
export const bhaiTalkAPI = axios.create({
  baseURL: "https://localhost:3001/api/v1/bhaitalk",
});
export const chesskarAPI = axios.create({
  baseURL: "https://localhost:3001/api/v1/chesskar",
});
