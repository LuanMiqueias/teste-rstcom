import React from "react";

import { Formik } from "formik";
import * as Yup from "Yup";

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
import { UserContext } from "../context/UserContext";

export default function account() {
  const { data, isAuth, logout } = React.useContext(UserContext);

  if (!isAuth) return <></>;
  return <ContainerForm></ContainerForm>;
}
