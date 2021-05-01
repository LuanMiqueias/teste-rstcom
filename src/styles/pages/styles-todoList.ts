import styled, { css, keyframes } from "styled-components";

const show = keyframes`
  to {
    transform: initial;
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

  animation: ${show} 0.3s forwards;
  opacity: 0;
  transform: translate(50%);
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`;
export const TodoList = styled.div`
  padding: 4rem;
  max-width: 500px;
`;
