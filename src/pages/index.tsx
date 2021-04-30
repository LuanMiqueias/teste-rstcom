import React from "react";
import UserAuth from "../auth/UserAuth";
import { NavBar } from "../components/navbar";

import { Box } from "../styles/components/styles-box";
import { ContainerForm } from "../styles/pages/styles-home";
import { AddTask } from "../components/addTask";
import { TaskList } from "../components/taskList";

interface IPropsTasks {
  name: string;
  completed: boolean;
  id: string;
}
export default function Home() {
  UserAuth({ redirectTo: "/login" });
  const [tasksData, setTasks] = React.useState([] as IPropsTasks[]);

  function handleTask(name: string, completed: boolean) {
    const id = idTask();
    setTasks([{ name, completed, id }, ...tasksData]);
    console.log(tasksData);
  }

  function idTask() {
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
  return (
    <Box>
      <NavBar />
      <ContainerForm>
        <AddTask addValue={handleTask} />
        <TaskList tasks={tasksData} />
      </ContainerForm>
    </Box>
  );
}
