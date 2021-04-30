import styled, { css } from "styled-components";

export const ContainerForm = styled.div`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;
