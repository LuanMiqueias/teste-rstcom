import React from "react";
import { Formik } from "formik";
import * as Yup from "Yup";
import Image from "next/image";

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

export default function Register() {
  return (
    <Box>
      <ImageBox>
        <img src="/logo-rstcom.png" alt="" width="100%" />
      </ImageBox>
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
            .email("Digite um email valido!")
            .required("Email é obrigatorio"),
          password: Yup.string().min(6).required("Senha é obrigatorio"),
          confirmPassword: Yup.string()
            .min(6)
            .required("Digite novamente sua senha"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => {
          return (
            <Form onSubmit={formik.handleSubmit}>
              <WrapperForm>
                <h1>Crie sua conta</h1>
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
                  Email
                  <InputBackground>
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
                  <InputBackground>
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
                  <InputBackground>
                    <Input
                      id="confirmPassword"
                      type="confirmPassword"
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
                <Button type="submit">Enviar</Button>
                <P>
                  Já tem uma conta?
                  <LinkForm href="/">Faça login!</LinkForm>
                </P>
              </WrapperForm>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}
