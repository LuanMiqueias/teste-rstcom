import React from "react";
import { Task } from "./task";

import { TaskListContainer } from "../styles/components/styles-todoList";
import { TodoListContext } from "../context/TodoListContext";
interface IPropsTasks {
  tasks: { name: string; completed: boolean; id: string }[];
}

export const TaskList = () => {
  const { tasks } = React.useContext(TodoListContext);

  return (
    <TaskListContainer>
      {tasks.map((task) => (
        <Task
          name={task.name}
          completed={task.completed}
          key={task.id}
          id_task={task.id}
        />
      ))}
    </TaskListContainer>
  );
};
