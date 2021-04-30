import React from "react";
import UserAuth from "../auth/UserAuth";
import { NavBar } from "../components/navbar";

import { Box } from "../styles/components/styles-box";
import { ContainerForm } from "../styles/pages/styles-home";

export default function Home() {
  UserAuth({ redirectTo: "/login" });

  return (
    <Box>
      <NavBar />
      <ContainerForm></ContainerForm>
    </Box>
  );
}
