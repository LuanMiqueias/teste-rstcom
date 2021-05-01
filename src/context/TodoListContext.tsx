import React, { ReactNode } from "react";

interface ITodoListProviderProps {
  children: React.ReactNode;
}

interface IPropsTasks {
  name: string;
  completed: boolean;
  id: string;
}

interface ITodoListProps {
  tasks: IPropsTasks[];
  createTask: (name: string) => void;
  deleteTask: (id: string) => void;
  completedTask: (id: string) => void;
}

export const TodoListContext = React.createContext({} as ITodoListProps);

export const TodoListProvider = ({ children }: ITodoListProviderProps) => {
  const [tasks, setTasks] = React.useState([] as IPropsTasks[]);
  React.useEffect(() => {
    if (localStorage.user_test) {
      const storage = JSON.parse(localStorage.user_test);
      setTasks(storage.tasks);
    }
  }, []);

  React.useEffect(() => {
    saveLocal();
  }, [tasks]);

  function saveLocal() {
    if (localStorage.user_test) {
      const storage = JSON.parse(localStorage.user_test);
      storage.tasks = tasks;
      localStorage.user_test = JSON.stringify(storage);
    } else {
      localStorage.user_test = JSON.stringify({ tasks });
    }
  }

  function createTask(name: string) {
    const idTask = createId();
    setTasks([{ name, completed: false, id: idTask }, ...tasks]);
    saveLocal();
  }

  function deleteTask(id: string) {
    const newTask = tasks.filter((task) => {
      return id !== task.id && task;
    });
    setTimeout(() => {
      setTasks(newTask);
      saveLocal();
    }, 250);
  }
  function completedTask(id: string) {
    const newTask = tasks.map((task) => {
      if (id === task.id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(newTask);
    saveLocal();
  }

  return (
    <TodoListContext.Provider
      value={{ tasks, createTask, deleteTask, completedTask }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

function createId() {
  const id_task =
    "" +
    new Date().getMilliseconds() +
    new Date().getSeconds() +
    new Date().getMinutes() +
    new Date().getHours() +
    new Date().getDay() +
    new Date().getMonth() +
    new Date().getFullYear() +
    "";
  return id_task;
}
