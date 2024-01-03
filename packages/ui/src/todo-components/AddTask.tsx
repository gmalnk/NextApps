"use client";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { addTask } from "db/action";
import { usePathname } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "db/utils/auth";

export default async function AddTask() {
  const pathName = usePathname();
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-[255px] flex flex-row justify-center items-center gap-2">
      <Dialog>
        <DialogTrigger>
          <div className="flex flex-row gap-2 hover:cursor-pointer hover: font-semibold">
            <Plus className="text-black " />
            Add New Task
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Task</DialogTitle>
          </DialogHeader>
          <div className="p-2 m-2">
            <form action={addTask} method="post">
              <input type="hidden" name="pathname" value={pathName} />
              <label htmlFor="task-title" className="mt-20 font-semibold">
                Title
              </label>
              <Input
                type="text"
                id="task-title"
                name="task-title"
                className="mt-1"
                placeholder="Title for the task"
              />
              <div className="mt-4 font-semibold">
                <label htmlFor="task-description">Description</label>
              </div>
              <textarea
                id="task-description"
                name="task-description"
                className="mt-1 w-full border border-input rounded-md px-3 py-2"
                rows={6}
                placeholder="Description for the task"
              />
              <div className="mt-4">
                <div className="flex items-center justify-start space-x-2 py-2">
                  <Checkbox id="important" name="important" />
                  <label
                    htmlFor="important"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Important
                  </label>
                </div>
                <div className="flex justify-start items-center space-x-2 py-2">
                  <Checkbox id="completed" name="completed" />
                  <label
                    htmlFor="completed"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Completed
                  </label>
                </div>
              </div>
              <DialogFooter>
                <DialogClose>
                  <Button type="submit">Add Task</Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
