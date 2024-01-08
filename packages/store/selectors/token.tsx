import { selector } from "recoil";
import { stockConfigState } from "../atoms/stockConfig";

export const tokenState = selector({
  key: "tokenState",
  get: ({ get }) => {
    const stockConfig = get(stockConfigState);

    return stockConfig.token;
  },
});
