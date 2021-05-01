import { Field } from "formik";
import Image from "next/image";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";

export const ContainerForm = styled.div`
  width: 100%;
  height: 100vh;
  align-items: flex-start;
  justify-content: flex-start;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`;
export const Form = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    width: 100%;
    max-width: 500px;
    min-height: 100vh;
    padding: 1rem 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    opacity: 0;
    transform: translateX(50%);
    animation: ${show} 0.2s forwards;
  `};
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem 1.5rem;
    align-items: flex-start;
    padding-top: 64px;
  }
`;

const show = keyframes`
  to {
    transform: initial;
    opacity: initial
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
interface IFieldsProps {
  Invalid?: boolean;
}
export const InputBackground = styled.div<IFieldsProps>`
  height: 45px;
  border: 1px solid #c4c4c4;
  background: #f5f5f5;
  border-radius: 5px;
  margin-top: 2px;
  display: flex;
  padding-right: 1rem;

  ${(props) =>
    props.Invalid &&
    css`
      border: 1px solid #e05353;
    `}

  &:focus-within {
    box-shadow: inset 0px -2px 0px #131399;
  }
`;

export const Icon = styled(Image)`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  height: 100%;
  padding: 0.25rem 1rem;
  background: none;
  border: 0;
  outline: none;
  border-radius: 5px;

  &:focus {
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
  bottom: -22px;
  right: 0;
  color: #cc3333;
  > p {
    animation: ${showError} 0.2s forwards;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) =>
    css`
      ${theme.colors.button.default}
    `};
  width: 100%;
  height: 50px;
  border: 0;
  outline: 0;
  border-radius: 5px;
  padding: 0 0.5rem;
  margin-top: 16px;
  cursor: pointer;
  color: #fff;
  font-size: 0.88rem;
  transition: all 0.1s;
  Invalid &:hover {
    transition: all 0.2s;
    background: ${({ theme }) =>
      css`
        ${theme.colors.button.hover}
      `};
  }
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
