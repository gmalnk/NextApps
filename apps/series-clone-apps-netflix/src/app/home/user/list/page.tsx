import { authOptions } from "db/utils/auth";
import prisma from "db/utils/db";
import { getServerSession } from "next-auth";
import Items from "@repo/ui/src/netflix-components/Items";

async function getData(userId: string) {
  const data: any = await prisma.watchList.findMany({
    where: {
      userId: userId,
    },
    select: {
      Movie: {
        select: {
          title: true,
          age: true,
          duration: true,
          imageString: true,
          overview: true,
          release: true,
          id: true,
          WatchLists: true,
          youtubeString: true,
        },
      },
    },
  });

  return data;
}

export default async function Watchlist() {
  const session = await getServerSession(authOptions);
  const data = await getData(session?.user?.email as string);
  const items = data.map((item: any) => item.Movie);
  return (
    <>
      <h1 className="text-white text-4xl font-bold underline mt-10 px-5 sm:px-0">
        Your watchlist
      </h1>
      <Items data={items} />
    </>
  );
}
