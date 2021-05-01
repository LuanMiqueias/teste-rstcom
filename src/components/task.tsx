import React from "react";
import { TodoListContext } from "../context/TodoListContext";
import { TaskContainer, Label } from "../styles/components/styles-tasks";

interface IPropsTask {
  name: string;
  id_task: string;
  completed: boolean;
}

export const Task = ({ name, completed, id_task }: IPropsTask) => {
  const [excluded, setExcluded] = React.useState(false);

  const { deleteTask, completedTask } = React.useContext(TodoListContext);
  return (
    <TaskContainer wasExcluded={excluded} isCompleted={completed}>
      <Label isCompleted={completed} wasExcluded={excluded} htmlFor={id_task}>
        <input
          type="checkbox"
          name="task"
          id={id_task}
          checked={completed}
          onChange={() => {
            completedTask(id_task);
          }}
        />
        {name}
      </Label>
      <img
        src="/icons/trash.svg"
        alt="delete"
        onClick={() => {
          setExcluded(true);
          deleteTask(id_task);
        }}
      />
    </TaskContainer>
  );
};
