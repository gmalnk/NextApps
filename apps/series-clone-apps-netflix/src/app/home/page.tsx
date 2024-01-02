import MoviePoster from "@repo/ui/src/netflix-components/MoviePoster";
import Items from "@repo/ui/src/netflix-components/Items";
import prisma from "../../../utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../utils/auth";

async function getPosterData() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
      youtubeString: true,
    },
    where: {
      id: 0,
    },
  });
  return data;
}
async function getRecentelyAddedData(userId: string) {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchLists: {
        where: {
          userId: userId,
        },
      },
      imageString: true,
      youtubeString: true,
      age: true,
      release: true,
      duration: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  return data;
}
export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const posterData = await getPosterData();
  const recentelyAddedData = await getRecentelyAddedData(
    session?.user?.email as string
  );
  return (
    <div className="p-5 lg:p-0">
      <MoviePoster data={posterData} />
      <h1 className="text-3xl font-bold ">Recently Added</h1>
      <Items data={recentelyAddedData} />
    </div>
  );
}
