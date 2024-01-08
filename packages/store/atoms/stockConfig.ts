import { RecoilState, atom } from "recoil";

export const stockConfigState: RecoilState<{
  timeFrame: string;
  token: string;
}> = atom({
  key: "stockConfigState",
  default: {
    timeFrame: "15m",
    token: "474",
  },
});
