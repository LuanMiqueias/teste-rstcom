import styled, { css, keyframes } from "styled-components";

const show = keyframes`
  to {
    opacity: initial
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100vh;
  align-items: flex-start;
  justify-content: flex-start;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`;
export const Wrapper = styled.div`
  opacity: 0;
  animation: ${show} 0.3s forwards;

  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;
