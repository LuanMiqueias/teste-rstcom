import React from "react";
import { Formik } from "formik";
import * as Yup from "Yup";
import { useRouter } from "next/router";

import { Box, ImageBox } from "../styles/components/styles-box";

import {
  Button,
  Form,
  Input,
  Label,
  WrapperForm,
  ErrorInput,
  LinkForm,
  P,
  InputBackground,
  Icon,
} from "../styles/components/styles-form";
import UserAuth from "../auth/UserAuth";

export default function Login() {
  const router = useRouter();
  const { user, loadData } = UserAuth({ redirectIfFound: "/", redirectTo: "" });
  return (
    <Box>
      <ImageBox>
        <img src="/logo-rstcom.png" alt="" width="100%" />
      </ImageBox>
      <Formik
        initialValues={{ name: "", password: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          password: Yup.string().min(6).required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          localStorage.user_test = JSON.stringify({ ...values });
          router.push("/");
          loadData();
        }}
      >
        {(formik) => {
          return (
            <Form onSubmit={formik.handleSubmit}>
              <WrapperForm>
                <h1>Faça seu login</h1>
                <Label htmlFor="name">
                  Name
                  <InputBackground>
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
                  Senha
                  <InputBackground>
                    <Input
                      id="email"
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
                <Button type="submit">Enviar</Button>
                <P>
                  Não tem uma conta?
                  <LinkForm href="/register">Crie uma!</LinkForm>
                </P>
              </WrapperForm>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}
