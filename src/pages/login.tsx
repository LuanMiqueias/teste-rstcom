import React from "react";
import { Formik } from "formik";
import * as Yup from "Yup";

import { Box, ImageBox } from "../styles/pages/styles-login";
import {
  Button,
  Form,
  Input,
  Label,
  WrapperForm,
  ErrorInput,
  LinkForm,
  P,
} from "../styles/components/styles-form";

export default function Home() {
  return (
    <Box>
      <ImageBox>
        <img src="/logo-rstcom.png" alt="" width="100%" />
      </ImageBox>
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string().email("Email invalido").required("Required"),
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
                <h1>Faça seu login</h1>
                <Label htmlFor="name">
                  Name
                  <Input
                    type="text"
                    id="name"
                    autoComplete="name"
                    {...formik.getFieldProps("name")}
                  />
                  <ErrorInput>
                    {formik.touched.name && <p>{formik.errors.name}</p>}
                  </ErrorInput>
                </Label>
                <Label htmlFor="email">
                  Email
                  <Input
                    id="email"
                    type="text"
                    autoComplete="email"
                    {...formik.getFieldProps("email")}
                  />
                  <ErrorInput>
                    {formik.touched.email && <p>{formik.errors.email}</p>}
                  </ErrorInput>
                </Label>
                <Button type="submit">Enviar</Button>
                <P>
                  Não tem uma conta?
                  <LinkForm href="/">Crie uma!</LinkForm>
                </P>
              </WrapperForm>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}
