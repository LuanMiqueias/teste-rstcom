import Head from "next/head";
import React from "react";

import { ThemeProvider } from "styled-components";
import { NavBar } from "../components/navbar";
import { TodoListProvider } from "../context/TodoListContext";
import { UserProvider } from "../context/UserContext";
import { GlobalStyles, Container } from "../styles/global-styles";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#003561" />
      </Head>
      <UserProvider>
        <TodoListProvider>
          <Container>
            <NavBar />
            <Component {...pageProps} />
          </Container>
        </TodoListProvider>
      </UserProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
