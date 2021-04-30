import React from "react";

interface IPropsTask {
  name: string;
  completed: boolean;
  id_task: string;
}

export const Task = ({ name, completed, id_task }: IPropsTask) => {
  return <div>{name}</div>;
};
