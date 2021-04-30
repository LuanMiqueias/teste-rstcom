import React from "react";
import { Task } from "./task";

interface IPropsTasks {
  tasks: { name: string; completed: boolean; id: string }[];
}

export const TaskList = ({ tasks }: IPropsTasks) => {
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Task
          name={task.name}
          completed={task.completed}
          key={task.id}
          id_task={task.id}
        />
      ))}
    </div>
  );
};
