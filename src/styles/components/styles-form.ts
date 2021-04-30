import { Field } from "formik";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    width: 100%;
    max-width: 550px;
    height: 100%;
    padding: 1rem 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  `};
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem 1.5rem;
    align-items: flex-start;
    padding-top: 64px;
  }
`;
export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 0.88rem;
  color: 1px solid #606060;
`;
export const Input = styled(Field)`
  padding: 0.75rem 1rem;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  background: #f5f5f5;
  outline: none;
  margin-top: 2px;

  &:focus {
    border-bottom: 1px solid #131399;
    box-shadow: inset 0px -2px 0px #131399;
  }
`;

const showError = keyframes`
from{
  transform: translateX(15px);
  opacity: 0;
}
  to {
    transform: initial;
    opacity: initial
  }
`;

export const ErrorInput = styled.div`
  text-align: end;
  font-size: 0.75rem;
  padding: 0.15rem 0rem;
  font-weight: 500;
  position: absolute;
  bottom: -24px;
  right: 0;
  color: #cc3333;
  > p {
    animation: ${showError} 0.2s forwards;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) =>
    css`
      ${theme.colors.button}
    `};
  border: 0;
  outline: 0;
  border-radius: 5px;
  padding: 1rem 0.5rem;
  margin-top: 16px;
  width: 100%;
  cursor: pointer;
  color: #fff;
  font-size: 0.88rem;
`;
export const P = styled.p`
  color: #606060;
  font-size: 0.88rem;
  > a {
    margin-left: 6px;
    color: #131399;
    font-weight: 400;
  }
`;
export const LinkForm = styled(Link)``;
