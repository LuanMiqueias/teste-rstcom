import React from "react";
import UserAuth from "../auth/UserAuth";

export const NavBar = () => {
  const { user } = UserAuth({ redirectIfFound: "", redirectTo: "" });

  if (!user) return null;

  return <div>NavBar</div>;
};
