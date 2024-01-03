"use server";

import { revalidatePath } from "next/cache";
import prisma from "./utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";

export async function addTowatchlist(formData: FormData) {
  "use server";
  const movieId = formData.get("movieId");
  const pathname = formData.get("pathname") as string;
  const session = await getServerSession(authOptions);

  const data = await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId),
    },
  });

  revalidatePath(pathname);
}

export async function deleteFromWatchlist(formData: FormData) {
  "use server";
  const watchlistId = formData.get("watchlistId") as string;
  const pathname = formData.get("pathname") as string;

  const data = await prisma.watchList.delete({
    where: {
      id: watchlistId,
    },
  });

  revalidatePath(pathname);
}

export async function addTask(formData: FormData) {
  "use server";
  const session = await getServerSession(authOptions);
  const pathname = formData.get("pathname") as string;
  const userid = session?.user?.email as string;
  const title = formData.get("task-title") as string;
  const description = formData.get("task-description") as string;
  const important = formData.get("important") as string;
  const completed = formData.get("completed") as string;
  const data = await prisma.task.create({
    data: {
      userId: userid,
      title,
      description,
      isImportant: important === "on",
      isCompleted: completed === "on",
    },
  });

  revalidatePath(pathname);
}

export async function deleteTask({
  pathname,
  taskid,
}: {
  pathname: string;
  taskid: string;
}) {
  "use server";
  const data = await prisma.task.delete({
    where: {
      id: taskid,
    },
  });
  revalidatePath(pathname);
}

export async function editTask(formData: FormData) {
  "use server";
  const pathname = formData.get("pathname") as string;
  const taskid = formData.get("task-id") as string;
  const title = formData.get("task-title") as string;
  const description = formData.get("task-description") as string;
  const important = formData.get("important") as string;
  const completed = formData.get("completed") as string;
  console.log(
    pathname,
    taskid,
    title,
    description,
    important as string,
    completed
  );
  const updatedTask = await prisma.task.update({
    where: { id: taskid },
    data: {
      title,
      description,
      isImportant: important === "on",
      isCompleted: completed === "on",
    },
  });
  revalidatePath(pathname);
}

export async function getTasks(completed?: boolean, important?: boolean) {
  try {
    const session = await getServerSession(authOptions);
    const whereCondition: {
      userId: string;
      isCompleted?: boolean;
      isImportant?: boolean;
    } = {
      userId: session ? (session?.user?.email as string) : "",
    };
    if (completed !== undefined) {
      whereCondition.isCompleted = completed;
    }

    if (important === true) {
      whereCondition.isImportant = important;
      delete whereCondition.isCompleted;
    }
    const tasks = await prisma.task.findMany({
      where: whereCondition,
      orderBy: { updatedAt: "desc" },
    });

    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

export async function seedTaskdata() {
  "use server";
  await prisma.task.createMany({
    data: [
      {
        title: "Gran Turismo",
        description:
          "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
        isCompleted: true,
        isImportant: true,
        userId: "goramanilnayak5@gmail.com",
      },
      {
        title: "A Haunting in Venice",
        description:
          "Celebrated sleuth Hercule Poirot, now retired and living in self-imposed exile in Venice, reluctantly attends a Halloween séance at a decaying, haunted palazzo. When one of the guests is murdered, the detective is thrust into a sinister world of shadows and secrets.",
        isCompleted: true,
        isImportant: true,
        userId: "goramanilnayak5@gmail.com",
      },
      {
        title: "Five Nights at Freddy's",
        description:
          "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
        isCompleted: true,
        isImportant: true,
        userId: "goramanilnayak5@gmail.com",
      },

      {
        title: "The Blacklist",
        description: `Raymond "Red" Reddington, one of the FBI's most wanted fugitives, surrenders in person at FBI Headquarters in Washington, D.C. He claims that he and the FBI have the same interests: bringing down dangerous criminals and terrorists. In the last two decades, he's made a list of criminals and terrorists that matter the most but the FBI cannot find because it does not know they exist. Reddington calls this "The Blacklist". Reddington will co-operate, but insists that he will speak only to Elizabeth Keen, a rookie FBI profiler`,
        isCompleted: true,
        isImportant: true,
        userId: "goramanilnayak5@gmail.com",
      },
      {
        title: "Suits",
        description:
          "While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, slips into a job interview with one of New York City's best legal closers, Harvey Specter. Tired of cookie-cutter law school grads, Harvey takes a gamble by hiring Mike on the spot after he recognizes his raw talent and photographic memory.",
        isCompleted: true,
        isImportant: true,
        userId: "goramanilnayak5@gmail.com",
      },
      {
        title: "Chernobyl",
        description:
          "The true story of one of the worst man-made catastrophes in history: the catastrophic nuclear accident at Chernobyl. A tale of the brave men and women who sacrificed to save Europe from unimaginable disaster.",
        isCompleted: true,
        isImportant: true,
        userId: "goramanilnayak5@gmail.com",
      },
      {
        title: "Retribution",
        description:
          "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
        isCompleted: true,
        isImportant: true,
        userId: "goramanilnayak5@gmail.com",
      },
      {
        title: "Spider-Man: Across the Spider-Verse",
        description:
          "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
        isCompleted: true,
        isImportant: true,
        userId: "goramanilnayak5@gmail.com",
      },

      {
        title: "Coco",
        description:
          "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
        isCompleted: true,
        isImportant: true,
        userId: "goramanilnayak5@gmail.com",
      },
      {
        title: "Monk",
        description:
          "Adrian Monk was once a rising star with the San Francisco Police Department, legendary for using unconventional means to solve the department's most baffling cases. But after the tragic (and still unsolved) murder of his wife Trudy, he developed an extreme case of obsessive-compulsive disorder. Now working as a private consultant, Monk continues to investigate cases in the most unconventional ways.",
        isCompleted: true,
        isImportant: true,
        userId: "goramanilnayak5@gmail.com",
      },
      {
        title: "Family Guy",
        description:
          "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
        isCompleted: true,
        isImportant: true,
        userId: "goramanilnayak5@gmail.com",
      },
    ],
  });
}

export async function toggleCompleted({
  taskid,
  completed,
  pathname,
}: {
  taskid: string;
  completed: boolean;
  pathname: string;
}) {
  "use server";
  const updatedTask = await prisma.task.update({
    where: { id: taskid },
    data: {
      isCompleted: completed,
    },
  });
  revalidatePath(pathname);
}
