import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "db/utils/auth";
import { getTasks } from "db/action";
import Task from "@repo/ui/src/todo-components/Task";
import AddTask from "@repo/ui/src/todo-components/AddTask";
import { Lusitana } from "next/font/google";
const lusitana = Lusitana({ subsets: ["latin"], weight: "700" });

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }
  const data = await getTasks();
  return (
    <>
      <div className="w-full h-full flex flex-col grow items-start justify-start md:flex-none md:justify-start">
        <div className="flex justify items-start px-4 bg-gray-50 rounded-md w-full">
          <h1
            className={`my-4 text-4xl md:text-2xl font-bold ${lusitana.className}`}
          >
            All Tasks
          </h1>
        </div>
        <div className="w-full h-full rounded-md bg-gray-50 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-6 overflow-scroll scroll-pl-px scroll-smooth">
          {data &&
            data.map((item) => {
              return <Task key={item.id} task={item} />;
            })}
          <AddTask />
        </div>
      </div>
    </>
  );
}
