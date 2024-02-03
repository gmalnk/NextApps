import axios from "axios";
export const trendIOAPI = axios.create({
  baseURL: process.env.TRENDIO_URL,
});
