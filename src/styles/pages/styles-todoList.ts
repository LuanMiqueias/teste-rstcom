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
  @media (max-width: 768px) {
    padding-top: 32px;
  }
`;
export const TodoList = styled.div`
  padding: 4rem;
  max-width: 500px;
  animation: ${show} 0.3s forwards;
  opacity: 0;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 4rem 1.5rem;
  }
`;
