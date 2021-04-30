import Head from "next/head";
import React from "react";

import { ThemeProvider } from "styled-components";
import UserAuth from "../auth/UserAuth";
import { NavBar } from "../components/navbar";
import { GlobalStyles } from "../styles/global-styles";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
