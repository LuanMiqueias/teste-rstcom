import React from "react";

import Head from "next/head";

import { ContainerForm, TodoList } from "../../styles/pages/styles-todoList";
import { AddTask } from "../../components/addTask";
import { TaskList } from "../../components/taskList";
import { LayoutUser } from "../../components/layout";

function Todolist() {
  return (
    <ContainerForm>
      <Head>
        <title>Todo List</title>
      </Head>
      <TodoList>
        <h1>Lista de Tarefas</h1>
        <AddTask />
        <TaskList />
      </TodoList>
    </ContainerForm>
  );
}
Todolist.getLayout = (page) => <LayoutUser>{page}</LayoutUser>;
export default Todolist;
