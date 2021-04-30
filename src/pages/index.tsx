import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import UserAuth from "../auth/UserAuth";
import { NavBar } from "../components/navbar";

import { Box } from "../styles/components/styles-box";
import {} from "../styles/pages/styles-home";

export default function Home() {
  UserAuth({ redirectTo: "/login" });

  return <Box></Box>;
}
