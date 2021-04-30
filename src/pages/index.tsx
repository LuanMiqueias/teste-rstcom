import Head from "next/head";
import styled from "styled-components";

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.title};
`;
export default function Home() {
  return (
    <div>
      <Heading>Olá</Heading>
    </div>
  );
}
