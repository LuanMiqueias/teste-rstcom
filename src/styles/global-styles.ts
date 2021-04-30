import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  a {
  color: inherit;
  text-decoration: none;
  }
  body{
    font-family: ${({ theme }) => theme.font.family.default};
    font-weight:300;
    overflow-x:hidden;
  }
  button{
    font-family: ${({ theme }) => theme.font.family.default};
  }
  @media (max-width: 992px) {
    :root{
      font-size:90%
    }
  }
  @media (max-width: 512px) {
    :root{
      font-size:82%
    }
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: url("/bg.png") no-repeat center center / cover;
`;
