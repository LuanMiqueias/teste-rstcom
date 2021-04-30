import React from "react";

import { Formik } from "formik";
import * as Yup from "Yup";

import UserAuth from "../auth/UserAuth";
import { NavBar } from "../components/navbar";

import { Box } from "../styles/components/styles-box";
import { ContainerForm, Wrapper } from "../styles/pages/styles-account";
import {
  Button,
  Form,
  Input,
  Label,
  ErrorInput,
  LinkForm,
  P,
  InputBackground,
  Icon,
} from "../styles/components/styles-form";

export default function account() {
  UserAuth({ redirectTo: "/login" });

  return (
    <Box>
      <NavBar />
      <ContainerForm></ContainerForm>
    </Box>
  );
}
