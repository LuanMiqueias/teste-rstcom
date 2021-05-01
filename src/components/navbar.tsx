import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { UserContext } from "../context/UserContext";
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
  const { data, isAuth, logout } = React.useContext(UserContext);

  const routes = useRouter();

  if (!isAuth && routes.asPath !== "/account" && routes.asPath !== "/todo-list")
    return <Box></Box>;
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
        <Logout onClick={() => logout()}>Sair</Logout>
        <InfoUser>
          <h2>{data?.name || "nome usuario"}</h2>
          <h3>{data?.email || "email@dominior.com.br"}</h3>
        </InfoUser>
      </Header>
      <Nav>
        <Link href="/account">
          <LinkNav isActive={routes.asPath === "/account"}>
            Dados Pessoais
          </LinkNav>
        </Link>
        <Link href="/todo-list">
          <LinkNav isActive={routes.asPath === "/todo-list"}>Todo List</LinkNav>
        </Link>
      </Nav>
    </Box>
  );
};
