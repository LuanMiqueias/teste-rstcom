import styled, { css } from "styled-components";

export const Box = styled.div`
  background: url("/bg.png") no-repeat center center / cover;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  left: 4rem;
  margin-top: -6rem;
  width: 12rem;
`;
