import React from "react";

import { Formik } from "formik";
import * as Yup from "Yup";

import { ContainerForm, Wrapper } from "../styles/pages/styles-account";
import {
  Button,
  Form,
  Input,
  Label,
  ErrorInput,
  P,
  InputBackground,
  Icon,
  WrapperForm,
} from "../styles/components/styles-form";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";
import Head from "next/head";

export default function account() {
  return (
    <ContainerForm>
      <Head>
        <title>Minha conta</title>
      </Head>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string(),
          email: Yup.string().email("Digite um email valido!"),
          password: Yup.string()
            .min(6, "Minimo 6 caracteres")
            .required("Digite sua senha"),
          confirmPassword: Yup.string()
            .min(6)
            .oneOf([Yup.ref("password"), null], "Senhas devem ser iguais")
            .required("Digite novamente sua senha"),
        })}
        onSubmit={(values) => {
          if (!localStorage.user_test) {
            localStorage.user_test = JSON.stringify({ user: values });
          }
          const storage = JSON.parse(localStorage.user_test);
          storage.user = values;

          localStorage.user_test = JSON.stringify(storage);
        }}
      >
        {(formik) => {
          return (
            <Form onSubmit={formik.handleSubmit}>
              <WrapperForm>
                <h1>Dados Pessoais</h1>
                <Label htmlFor="name">
                  Name
                  <InputBackground
                    Invalid={formik.touched.name && formik.errors.name && true}
                  >
                    <Input
                      type="text"
                      id="name"
                      autoComplete="name"
                      {...formik.getFieldProps("name")}
                    />
                  </InputBackground>
                  <ErrorInput>
                    {formik.touched.name && <p>{formik.errors.name}</p>}
                  </ErrorInput>
                </Label>
                <Label htmlFor="email">
                  Email
                  <InputBackground
                    Invalid={
                      formik.touched.email && formik.errors.email && true
                    }
                  >
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...formik.getFieldProps("email")}
                    />
                  </InputBackground>
                  <ErrorInput>
                    {formik.touched.email && <p>{formik.errors.email}</p>}
                  </ErrorInput>
                </Label>

                <Label htmlFor="password">
                  Password
                  <InputBackground
                    Invalid={
                      formik.touched.password && formik.errors.password && true
                    }
                  >
                    <Input
                      id="password"
                      type="password"
                      autoComplete="password"
                      {...formik.getFieldProps("password")}
                    />
                    <Icon
                      src="/icons/eye-on.svg"
                      alt="show password"
                      height="24px"
                      width="24px"
                    />
                  </InputBackground>
                  <ErrorInput>
                    {formik.touched.password && <p>{formik.errors.password}</p>}
                  </ErrorInput>
                </Label>

                <Label htmlFor="confirmPassword">
                  Confirmar senha
                  <InputBackground
                    Invalid={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword &&
                      true
                    }
                  >
                    <Input
                      id="confirmPassword"
                      type="Password"
                      autoComplete="confirmPassword"
                      {...formik.getFieldProps("confirmPassword")}
                    />
                    <Icon
                      src="/icons/eye-on.svg"
                      alt="show password"
                      height="24px"
                      width="24px"
                    />
                  </InputBackground>
                  <ErrorInput>
                    {formik.touched.confirmPassword && (
                      <p>{formik.errors.confirmPassword}</p>
                    )}
                  </ErrorInput>
                </Label>
                <Button type="submit">Salvar</Button>
              </WrapperForm>
            </Form>
          );
        }}
      </Formik>
    </ContainerForm>
  );
}
