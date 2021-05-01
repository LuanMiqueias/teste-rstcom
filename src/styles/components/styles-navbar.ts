import Link from "next/link";
import { type } from "node:os";
import styled, { css, keyframes, StyledFunction } from "styled-components";

interface IPropsNav {
  show: boolean;
}
export const Box = styled.div<IPropsNav>`
  height: 100%;
  width: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem 1.5rem;
  gap: 32px;

  @media (max-width: 768px) {
    & {
      width: 100%;
      max-width: 300px;
      transform: translateX(-100%);
      position: absolute;
      padding: 64px 1.5rem 2rem;

      z-index: 1000;
      background: #303030;
      transition: all 0.3s ease;
      background: url("/bg.png") center left / cover;
      opacity: 0;
      ${(props) =>
        props.show &&
        css`
          transform: translateX(0);
          opacity: 1;
        `};
    }
  }
`;
const showBackground = keyframes`
to{
  opacity: 1;
}
`;
export const Background = styled.div`
  opacity: 0;
  z-index: -10;
  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.8);
    animation: ${showBackground} 0.3s forwards;
  }
`;

export const OpenNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 16px;
    top: 16px;
    border-radius: 10px;
    background: #0f69b3;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
`;

export const CloseNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 16px;
    top: 16px;
    border-radius: 10px;
    background: #0f69b3;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }
`;
export const LogoToHome = styled.span`
  width: 64px;
  & img {
    cursor: pointer;
    width: 100%;
  }
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.colors.title_secondary};
  padding: 1.5rem 0;
`;

export const Logout = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.button.logout};
    width: 6rem;
    margin-top: 8px;
    text-align: center;
    padding: 8px 0;
    border-radius: 24px;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 100%;
    color: #fff;
    cursor: pointer;

    &:hover {
      background: ${theme.colors.button.logout_hover};
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 12px 0;
      width: 6rem;
    }
  `}
`;

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  > h2 {
    font-size: 1rem;
    font-weight: 500;
  }
  > h3 {
    font-weight: 300;
    font-size: 0.88rem;
  }
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    flex: 1;
    gap: 8px;
    color: ${theme.colors.nav.link};
  `}
`;
interface ILinkProps {
  isActive: boolean;
}
export const LinkNav = styled.a<ILinkProps>`
  font-size: 1rem;
  ${(props) =>
    props.isActive
      ? css`
          color: ${props.theme.colors.nav.link_active};
          font-weight: 600;
        `
      : css`
          color: ${props.theme.colors.nav.link};
        `}
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    font-size: 1.35rem;
  }
`;
