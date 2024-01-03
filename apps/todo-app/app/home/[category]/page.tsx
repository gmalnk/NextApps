import Task from "@repo/ui/src/todo-components/Task";
import AddTask from "@repo/ui/src/todo-components/AddTask";
import { getTasks } from "db/action";
import { getServerSession } from "next-auth";
import { authOptions } from "db/utils/auth";
import { redirect } from "next/navigation";
export default async function page({
  params,
}: {
  params: { category: string };
}) {
  let completed = false;
  let important = false;
  if (params?.category === "important") {
    console.log("in important page");
    important = true;
  } else if (params?.category === "completed") {
    completed = true;
  }
  const data = await getTasks(completed, important);
  return (
    <>
      <div className="w-full h-full rounded-md bg-gray-50 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-6 overflow-scroll scroll-pl-px scroll-smooth">
        {data &&
          data.map((item) => {
            return <Task key={item.id} task={item} />;
          })}
        <AddTask />
      </div>
    </>
  );
}
