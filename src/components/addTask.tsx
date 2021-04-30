import React from "react";
import { TodoListContext } from "../context/TodoListContext";
import { Form } from "../styles/components/styles-todoList";

export const AddTask = () => {
  const [nameTask, setNameTask] = React.useState("");
  const { createTask } = React.useContext(TodoListContext);

  function handleAddTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (nameTask.trim() !== "") {
      createTask(nameTask);
      setNameTask("");
    }
  }
  return (
    <Form>
      <input
        type="text"
        onChange={({ target }) => setNameTask(target.value)}
        value={nameTask}
        placeholder="Adicione suas tarefas..."
      />
      <button type="submit" onClick={(e) => handleAddTask(e)}>
        +
      </button>
    </Form>
  );
};
