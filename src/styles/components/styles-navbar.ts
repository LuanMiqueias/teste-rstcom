import Link from "next/link";
import { type } from "node:os";
import styled, { css, StyledFunction } from "styled-components";

export const Box = styled.div`
  height: 100%;
  width: 450px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem 1.5rem;
  gap: 32px;
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
    position: absolute;
    right: 0;
    top: -8px;
    background: ${theme.colors.button.logout};
    padding: 8px 1.25rem;
    border-radius: 24px;
    font-size: 0.75rem;
    line-height: 100%;
    color: #fff;
    cursor: pointer;

    &:hover {
      background: ${theme.colors.button.logout_hover};
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
  ${(props) =>
    props.isActive
      ? css`
          color: ${props.theme.colors.nav.link_active};
          font-weight: 500;
        `
      : css`
          color: ${props.theme.colors.nav.link};
        `}
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
