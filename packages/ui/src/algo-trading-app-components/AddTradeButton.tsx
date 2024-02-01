"use client";
import AddTradePanel from "./AddTradePanel";
import { useRecoilState } from "recoil";
import { tradeBoxActivationState } from "store/atoms/trend.io";

export default function AddTradeButton() {
  const [open, setOpen] = useRecoilState(tradeBoxActivationState);
  return (
    <>
      <div className="flex items-center justify-center relative right-0 text-white bg-blue-500 rounded-md py-1 px-2 font-semibold hover:cursor-pointer hover:bg-blue-400">
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          Add Trade
        </button>
      </div>
      {open && <AddTradePanel />}
    </>
  );
}
