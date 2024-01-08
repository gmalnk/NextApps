import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Separator } from "../../components/ui/separator";
import { CandlestickChart, ClipboardList } from "lucide-react";

export default function VerticalNavBar() {
  return (
    <div className="w-[64px] h-screen bg-white mr-1 flex flex-col justify-start items-center">
      <div className="mt-1">
        <Link href="/home">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <Separator orientation="horizontal" className="my-2 bg-gray-600" />
      </div>
      <div className="flex flex-col gap-2 justify-between items-center h-full">
        <div>
          <Link href="/stocks">
            <CandlestickChart className="w-10 h-10 p-1 rounded-md stroke-1 text-neutral-900 hover:bg-gray-200 hover:cursor-pointer" />
          </Link>
          <Link href="/trades">
            <ClipboardList className="w-10 h-10 p-1 rounded-md stroke-1 text-neutral-900 hover:bg-gray-200 hover:cursor-pointer" />
          </Link>
        </div>
        {/* <div>
          <SignOutIcon />
        </div> */}
      </div>
    </div>
  );
}
