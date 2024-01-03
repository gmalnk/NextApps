import { authOptions } from "db/utils/auth";
import prisma from "db/utils/db";
import { getServerSession } from "next-auth";
import Items from "@repo/ui/src/netflix-components/Items";
import { redirect } from "next/navigation";

async function getData(category: string, userId: string) {
  const data = await prisma.movie.findMany({
    where: {
      category: category,
    },
    select: {
      age: true,
      duration: true,
      id: true,
      title: true,
      release: true,
      imageString: true,
      overview: true,
      youtubeString: true,
      WatchLists: {
        where: {
          userId: userId,
        },
      },
    },
  });
  return data;
}

export default async function CategoryPage({
  params,
}: {
  params: { genre: string };
}) {
  const session = await getServerSession(authOptions);
  // console.log(session);
  if (!session) {
    return redirect("/login");
  }
  const data = await getData(params.genre, session?.user?.email as string);

  return <Items data={data} />;
}
