import styled, { css, keyframes } from "styled-components";

export const TaskListContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
  @media (max-width: 768px) {
    height: 74px;
  }
`;

interface ITaskProps {
  isCompleted?: boolean;
  wasExcluded: boolean;
}
const show = keyframes`
50%{
  transform: scale(0.95);
}
0%,70%{
  transform: initial;
}
`;

export const TaskContainer = styled.div<ITaskProps>`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  font-size: 0.88rem;
  font-weight: 400;
  color: #818181;
  transition: all 0.1s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${show} 0.3s forwards;

  &:hover {
    color: #353535;
    transform: scale(1.02);
    transition: all 0.05s;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
  &:hover > img {
    opacity: 0.4;
    transform: translateY(0);
  }
  > label {
    height: 45px;
    padding: 0.5rem 1.5rem;
    @media (max-width: 768px) {
      height: 74px;
      font-size: 1rem;
    }
  }
  > img {
    height: 20px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.2s;
    transform: translateY(25%);
    margin-right: 2rem;
    &:hover {
      transition: all 0.1s;
      transform: scale(1.2);
      opacity: 0.9;
    }
    @media (max-width: 768px) {
      opacity: 0.3;
      transform: initial;
      height: 28px;
    }
  }

  ${(props) =>
    props.wasExcluded &&
    css`
      animation: ${excluded} 0.2s linear forwards;
    `}

  ${(props) =>
    props.isCompleted &&
    !props.wasExcluded &&
    css`
      animation: ${completed} 0.6s linear forwards;
      border: 1px solid #2acca9;
      color: #2acca9;
      text-decoration: line-through;

      &:hover {
        border: 1px solid rgba(42, 204, 169, 0.3);
        color: #2acca9;
      }
    `}
`;
const excluded = keyframes`
50%{
  transform: translate(5%);
}
  to {
    transform: translate(-25%);
    opacity: 0;
  }
`;

const completed = keyframes`
25%{
  transform: scale(1.05);
}
0%,50%{
  transform: scale(0.95);
}
75%,100%{
  transform: initial;
}

`;

export const Label = styled.label<ITaskProps>`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  & > input {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.2s;

    &::before {
      content: "";
      background: #ffffff;
      width: 16px;
      height: 16px;
      border-radius: 12px;
      position: absolute;
      border: inherit;
      border: 1px solid #696969;

      ${(props) =>
        props.isCompleted &&
        !props.wasExcluded &&
        css`
          border-color: #2acca9;
        `}
    }

    &:checked:after {
      content: "";
      background: #2acca9;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      position: absolute;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 45px;
  display: flex;
  gap: 6px;
  margin-top: 44px;
  > input {
    flex: 1;
    height: 100%;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: #ffffff;
    outline: none;
    font-size: 1rem;
    &::placeholder {
      font-size: 0.88rem;
      color: #a7a7a7;
      font-weight: 200;
    }
  }
  > button {
    height: 100%;
    padding: 0 2rem;
    cursor: pointer;
    font-size: 1.5rem;
    line-height: 100%;
    border-radius: 5px;
    border: 0;
    background-color: ${({ theme }) => theme.colors.button.default};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      background-color: ${({ theme }) => theme.colors.button.hover};
    }
  }
`;
