"use client";
import clsx from "clsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { stockConfigState } from "store/atoms/stockConfig";
import { timeFrameState } from "store/selectors/timeFrame";

export default function TimeFrame({ timeFrame }: { timeFrame: string }) {
  const setStockConfig = useSetRecoilState(stockConfigState);
  const currentTFValue = useRecoilValue(timeFrameState);
  return (
    <li
      className={clsx("hover:cursor-pointer px-1 text-black rounded-md", {
        "bg-blue-500 text-white": timeFrame === currentTFValue,
        "hover:bg-gray-200 ": timeFrame !== currentTFValue,
      })}
      onClick={() => setStockConfig((value) => ({ ...value, timeFrame }))}
    >
      <p className="p-1">{timeFrame}</p>
    </li>
  );
}
