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
  Background,
  OpenNav,
  CloseNav,
} from "../styles/components/styles-navbar";

export const NavBar = () => {
  const { data, isAuth, logout } = React.useContext(UserContext);
  const [showNav, setShowNav] = React.useState(false);
  const routes = useRouter();

  if (!isAuth && routes.asPath !== "/account" && routes.asPath !== "/todo-list")
    return <></>;
  return (
    <>
      {showNav && (
        <Background onClick={() => setShowNav(!showNav)}></Background>
      )}
      <OpenNav onClick={() => setShowNav(!showNav)}>
        <img src="/icons/menu.svg" alt="" />
      </OpenNav>
      <Box show={showNav}>
        <CloseNav onClick={() => setShowNav(!showNav)}>
          <img src="/icons/close.svg" alt="" />
        </CloseNav>

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
          <InfoUser>
            <h2>{data?.name || "nome usuario"}</h2>
            <h3>{data?.email || "email@dominior.com.br"}</h3>
            <Logout onClick={() => logout()}>Sair</Logout>
          </InfoUser>
        </Header>
        <Nav>
          <Link href="/account">
            <LinkNav
              isActive={routes.asPath === "/account"}
              onClick={() => setShowNav(false)}
            >
              Dados Pessoais
            </LinkNav>
          </Link>
          <Link href="/todo-list">
            <LinkNav
              isActive={routes.asPath === "/todo-list"}
              onClick={() => setShowNav(false)}
            >
              Todo List
            </LinkNav>
          </Link>
        </Nav>
      </Box>
    </>
  );
};
