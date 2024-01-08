import NavLinks from "./nav-links";
import SignOutButton from "./SignOutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "db/utils/auth";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

export default async function SideNav() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="mb-2 flex flex-col h-20 items-start justify-start rounded-md bg-green-600 p-4 md:h-40 gap-2">
        <Avatar className="w-12 h-12">
          <AvatarImage src={session?.user?.image as string} />
          <AvatarFallback className="font-semibold text-[28px] text-blue-500">
            {session?.user?.name && session?.user?.name[0]?.toLocaleUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="text-white font-semibold">
          {session?.user?.name?.toUpperCase()}
        </div>
        <p className="text-white font-semibold text-ellipsis overflow-hidden ...">
          {session?.user?.email}
        </p>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <SignOutButton />
      </div>
    </div>
  );
}
