"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Badge } from "../../components/ui/badge";
import { FileSignature, Trash } from "lucide-react";
import { usePathname } from "next/navigation";
import { deleteTask, toggleCompleted } from "db/action";
import clsx from "clsx";
import EditTask from "./EditTask";

interface iprops {
  id: string;
  title: string;
  description: string | null;
  isCompleted: boolean;
  isImportant: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
  userId: string;
}

export default async function Task({ task }: { task: iprops }) {
  const pathname = usePathname();
  return (
    <>
      <Card className="h-[255px] flex flex-col justify-between items-center">
        <div className="w-full">
          <CardHeader className="py-4 px-6 ">
            <CardTitle className="line-clamp-1 text-xl">
              {task?.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="py-4 px-6 pt-0">
            <p className="line-clamp-4 ">{task?.description}</p>
          </CardContent>
        </div>
        <div className="w-full">
          <CardFooter className="p-6 pt-4">
            <div className="flex flex-col w-full ">
              <div className="line-clamp-1 text-sm font-sans">
                {task?.updatedAt && task?.updatedAt.toString()}
              </div>
              <div className="flex justify-between items-center">
                <form
                  action={() =>
                    toggleCompleted({
                      taskid: task?.id,
                      completed: !task?.isCompleted,
                      pathname,
                    })
                  }
                >
                  <button>
                    <Badge
                      className={clsx(
                        { "bg-red-500": !task?.isCompleted },
                        { "bg-green-500": task?.isCompleted }
                      )}
                    >
                      {task?.isCompleted ? "completed" : "incomplete"}
                    </Badge>
                  </button>
                </form>
                <div className="flex justify-center items-center gap-2 m-2">
                  <Dialog>
                    <DialogTrigger>
                      <FileSignature className="w-5 h-5 hover:cursor-pointer" />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Task</DialogTitle>
                      </DialogHeader>
                      <EditTask task={task}></EditTask>
                    </DialogContent>
                  </Dialog>
                  <Trash
                    onClick={() => deleteTask({ pathname, taskid: task?.id })}
                    className="w-5 h-5 hover:cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </CardFooter>
        </div>
      </Card>
    </>
  );
}
