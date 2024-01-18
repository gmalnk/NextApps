"use client";
import FullScreenChart from "./FullScreenChart";
import { Dialog, DialogTrigger } from "../../components/ui/dialog";

export default function AddTradeButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center justify-center relative right-0 text-white bg-blue-500 rounded-md py-1 px-2 font-semibold hover:cursor-pointer hover:bg-blue-400">
          <button>Add Trade</button>
        </div>
      </DialogTrigger>
      <FullScreenChart />
    </Dialog>
  );
}
