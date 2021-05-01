import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

import { Box, ImageBox } from "../styles/components/styles-box";

import {
  Button,
  Form,
  Input,
  Label,
  WrapperForm,
  ErrorInput,
  P,
  InputBackground,
  Icon,
  ContainerForm,
} from "../styles/components/styles-form";
import { UserContext } from "../context/UserContext";
import Link from "next/link";
import Head from "next/head";

export default function Login() {
  const router = useRouter();
  const { isAuth, login, redirectIfFound } = React.useContext(UserContext);
  React.useEffect(() => {
    redirectIfFound("/todo-list");
  }, []);
  return (
    <Box>
      <Head>
        <title>Login</title>
      </Head>
      <ImageBox>
        <img src="/logo-rstcom.png" alt="" width="100%" />
      </ImageBox>
      <ContainerForm>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Digite um email invalido")
              .required("Digite seu email"),
            password: Yup.string()
              .min(6, "Minimo 6 caracteres")
              .required("Digite a senha"),
          })}
          onSubmit={(values) => {
            if (!localStorage.user_test) {
              localStorage.user_test = JSON.stringify({ user: values });
            }
            const storage = JSON.parse(localStorage.user_test);
            storage.user = values;
            localStorage.user_test = JSON.stringify(storage);
            router.push("/todo-list");
            login();
          }}
        >
          {(formik) => {
            return (
              <Form onSubmit={formik.handleSubmit}>
                <WrapperForm>
                  <h1>Faça seu login</h1>
                  <Label htmlFor="email">
                    Email
                    <InputBackground
                      Invalid={
                        formik.touched.email && formik.errors.email && true
                      }
                    >
                      <Input
                        type="text"
                        id="email"
                        autoComplete="email"
                        {...formik.getFieldProps("email")}
                      />
                    </InputBackground>
                    <ErrorInput>
                      {formik.touched.email && <p>{formik.errors.email}</p>}
                    </ErrorInput>
                  </Label>
                  <Label htmlFor="password">
                    Senha
                    <InputBackground
                      Invalid={
                        formik.touched.password &&
                        formik.errors.password &&
                        true
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
                      {formik.touched.password && (
                        <p>{formik.errors.password}</p>
                      )}
                    </ErrorInput>
                  </Label>
                  <Button type="submit">Enviar</Button>
                  <P>
                    Não tem uma conta?
                    <Link href="/register">Crie uma!</Link>
                  </P>
                </WrapperForm>
              </Form>
            );
          }}
        </Formik>
      </ContainerForm>
    </Box>
  );
}
