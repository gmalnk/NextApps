import { authOptions } from "db/utils/auth";
import { getServerSession } from "next-auth";
import { Lusitana } from "next/font/google";
import { redirect } from "next/navigation";

const allowedPaths = {
  important: "Important Tasks",
  completed: "Completed Tasks",
  incomplete: "Incomplete Tasks",
};

const lusitana = Lusitana({ subsets: ["latin"], weight: "700" });
export default async function page({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: "important" | "completed" | "incomplete" };
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }
  let title = "";
  if (params.category in allowedPaths) {
    title = allowedPaths[params.category];
  } else {
    return redirect("/home");
  }
  return (
    <div className="w-full h-full flex flex-col grow items-start justify-start md:flex-none md:justify-start">
      <div className="flex justify items-start px-4 bg-gray-50 rounded-md w-full">
        <h1
          className={`my-4 text-4xl md:text-2xl font-bold ${lusitana.className}`}
        >
          {title}
        </h1>
      </div>
      {children}
    </div>
  );
}
