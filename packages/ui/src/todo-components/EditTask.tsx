"use client";
import { DialogClose, DialogFooter } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { editTask } from "db/action";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

export default function EditTask({ task }: { task: iprops }) {
  const pathname = usePathname();
  const [title, setTitle] = useState(task?.title);
  const [description, setDescription] = useState(task?.description);
  const [completed, setCompleted] = useState(task?.isCompleted);
  const [important, setImportant] = useState(task?.isImportant);
  return (
    <div className="p-2 m-2">
      <form action={editTask} method="post">
        <input type="hidden" name="task-id" value={task?.id} />
        <input type="hidden" name="pathname" value={pathname} />
        <label htmlFor="task-title" className="mt-20">
          Title
        </label>
        <Input
          type="text"
          id="task-title"
          name="task-title"
          className="mt-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="mt-4">
          <label htmlFor="task-description">Description</label>
        </div>
        <textarea
          id="task-description"
          name="task-description"
          className="mt-2 w-full border border-input rounded-md px-3 py-2"
          rows={5}
          onChange={(e) => setDescription(e.target.value)}
          value={description as string}
        />
        <div className="mt-4">
          <div className="flex items-center justify-start space-x-2 py-2">
            <input
              id="important"
              name="important"
              type="checkbox"
              onClick={() => setImportant((state) => !state)}
              checked={important}
              className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded"
            />

            <label
              htmlFor="important"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Important
            </label>
          </div>
          <div className="flex justify-start items-center space-x-2 py-2">
            <input
              id="completed"
              name="completed"
              type="checkbox"
              onClick={() => setCompleted((state) => !state)}
              checked={completed}
              className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded"
            />
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
            <Button type="submit">Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </div>
  );
}
