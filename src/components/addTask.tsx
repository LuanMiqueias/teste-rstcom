import React from "react";

interface IPropsTask {
  addValue: (name: string, completed: boolean) => void;
}

export const AddTask = ({ addValue }: IPropsTask) => {
  const [nameTask, setNameTask] = React.useState("");

  function handleAddTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    addValue(nameTask, false);
    setNameTask("");
  }
  return (
    <form>
      <input
        type="text"
        onChange={({ target }) => setNameTask(target.value)}
        value={nameTask}
      />
      <button type="submit" onClick={(e) => handleAddTask(e)}>
        Add
      </button>
    </form>
  );
};
