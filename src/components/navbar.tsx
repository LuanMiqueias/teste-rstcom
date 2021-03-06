import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
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
  const [showNav, setShowNav] = React.useState(false);
  const routes = useRouter();

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
            <h2>{"nome usuario"}</h2>
            <h3>{"email@dominior.com.br"}</h3>
            <Logout onClick={() => routes.push("/")}>Sair</Logout>
          </InfoUser>
        </Header>
        <Nav>
          <Link href="/user/account">
            <LinkNav
              isActive={routes.asPath === "/user/account"}
              onClick={() => setShowNav(false)}
            >
              Dados Pessoais
            </LinkNav>
          </Link>
          <Link href="/user/">
            <LinkNav
              isActive={routes.asPath === "/user"}
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
