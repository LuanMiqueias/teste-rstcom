import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

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
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

export default function Register() {
  const router = useRouter();
  return (
    <>
      <Box>
        <Head>
          <title>Cadastrar-se</title>
        </Head>
        <ImageBox>
          <img src="/logo-rstcom.png" alt="" width="100%" />
        </ImageBox>
        <ContainerForm>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Nome é obrigatorio"),
              email: Yup.string()
                .email("Digite um email valido")
                .required("Email é obrigatorio"),
              password: Yup.string()
                .min(6, "Minimo 6 caracteres")
                .required("Senha é obrigatorio"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Senhas não correspondem")
                .min(6)
                .required("Digite novamente sua senha"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              if (!localStorage.user_test) {
                localStorage.user_test = JSON.stringify({ user: values });
              }
              const storage = JSON.parse(localStorage.user_test);
              storage.user = values;
              localStorage.user_test = JSON.stringify(storage);
              router.push("/todo-list");
            }}
          >
            {(formik) => {
              return (
                <Form onSubmit={formik.handleSubmit}>
                  <WrapperForm>
                    <h1>Crie sua conta</h1>
                    <Label htmlFor="name">
                      Name
                      <InputBackground
                        Invalid={
                          formik.touched.name && formik.errors.name && true
                        }
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

                    <Label htmlFor="confirmPassword">
                      Confirmar senha
                      <InputBackground
                        Invalid={
                          formik.touched.password &&
                          formik.errors.confirmPassword &&
                          true
                        }
                      >
                        <Input
                          id="confirmPassword"
                          type="password"
                          autoComplete="password"
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
                    <Button type="submit">Enviar</Button>
                    <P>
                      Já tem uma conta?
                      <Link href="/">Faça login!</Link>
                    </P>
                  </WrapperForm>
                </Form>
              );
            }}
          </Formik>
        </ContainerForm>
      </Box>
    </>
  );
}
