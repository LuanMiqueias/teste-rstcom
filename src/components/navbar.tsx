import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import UserAuth from "../auth/UserAuth";
import {
  Box,
  LogoToHome,
  Header,
  Logout,
  InfoUser,
  Nav,
  LinkNav,
} from "../styles/components/styles-navbar";

export const NavBar = () => {
  const { user } = UserAuth({ redirectIfFound: "", redirectTo: "" });
  const router = useRouter();

  if (!user) return null;
  return (
    <Box>
      <Header>
        <Link href="/">
          <LogoToHome>
            <Image
              src="/logo-rstcom.png"
              alt="Logo"
              height="100%"
              width="100%"
            />
          </LogoToHome>
        </Link>
        <Logout>Sair</Logout>
        <InfoUser>
          <h2>{user.name}</h2>
          <h3>{user?.email || "email@dominior.com.br"}</h3>
        </InfoUser>
      </Header>
      <Nav>
        <Link href="/account">
          <LinkNav isActive={router.asPath === "/account"}>
            Dados Pessoais
          </LinkNav>
        </Link>
        <Link href="/">
          <LinkNav isActive={router.asPath === "/"}>Todo List</LinkNav>
        </Link>
      </Nav>
    </Box>
  );
};
