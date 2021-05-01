import React from "react";
import { Container } from "../styles/global-styles";
import { NavBar } from "./navbar";

export const LayoutUser = ({ children }) => {
  return (
    <Container>
      <NavBar />
      {children}
    </Container>
  );
};
