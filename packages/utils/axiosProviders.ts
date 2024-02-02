import axios from "axios";
export const trendIOAPI = axios.create({
  baseURL: process.env.TRENDIO_URL,
});
export const bhaiTalkAPI = axios.create({
  baseURL: process.env.BHAITALK_URL,
});
export const chesskarAPI = axios.create({
  baseURL: process.env.CHECKKAR_URL,
});
