import { selector } from "recoil";
import { stockConfigState } from "../atoms/trend.io";

export const timeFrameState = selector({
  key: "timeFrameState",
  get: ({ get }) => {
    const stockConfig = get(stockConfigState);

    return stockConfig.timeFrame;
  },
});
