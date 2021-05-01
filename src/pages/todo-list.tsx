import React from "react";
import { NavBar } from "../components/navbar";

import { Box } from "../styles/components/styles-box";
import { ContainerForm, TodoList } from "../styles/pages/styles-todoList";
import { AddTask } from "../components/addTask";
import { TaskList } from "../components/taskList";
import { TodoListProvider } from "../context/TodoListContext";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";

interface IPropsTasks {
  name: string;
  completed: boolean;
  id: string;
}
export default function Home() {
  return (
    <ContainerForm>
      <TodoList>
        <h1>Lista de Tarefas</h1>
        <AddTask />
        <TaskList />
      </TodoList>
    </ContainerForm>
  );
}
