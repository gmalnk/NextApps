import { selector, DefaultValue } from "recoil";
import { stockConfigState } from "../atoms/trend.io";

export const tokenState = selector({
  key: "tokenState",
  get: ({ get }) => {
    const stockConfig = get(stockConfigState);

    return stockConfig.token;
  },
  set: ({ set }, newValue) => {
    set(stockConfigState, (prevStockConfig) => ({
      ...prevStockConfig,
      token:
        newValue instanceof DefaultValue ? prevStockConfig.token : newValue,
    }));
  },
});
