import React from "react";
import { NavBar } from "./navbar";

export const LayoutUser = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export const Layout = ({ children }) => {
  return <>{children}</>;
};
