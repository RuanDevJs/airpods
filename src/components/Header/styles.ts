import styled, { keyframes } from "styled-components";

/* @Animations */

const UpToDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
`;

/* @End Animations */

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background: linear-gradient(90deg, #edf4fa, 60%, #fff);
`;

export const Container = styled.div`
  max-width: 82vw;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 0;
`;

export const Title = styled.h1`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.black};

  animation: ${UpToDown} 1s forwards;
  transition: 0.32s ease-in-out !important;

  &:hover {
    opacity: 0.72 !important;
    cursor: pointer;
    transition: 0.32s ease-in-out !important;
  }
`;

export const Navigation = styled.nav``;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const List = styled.li`
  opacity: 0;
  transition: 0.32s ease-in-out;
  border-bottom: 1px solid transparent;

  &:nth-child(3) {
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 50px;

    padding: 0 12px;
    text-align: center;

    border: 0 !important;
  }

  &:nth-child(3) a {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    filter: brightness(1.12);
  }

  &:nth-child(1)::after,
  &:nth-child(2)::after {
    content: "";
    display: block;
    width: 1px;
    height: 2px;

    background-color: transparent;
    transition: 0.42s ease-in-out;
  }

  &:nth-child(1):hover::after,
  &:nth-child(2):hover::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;

    background-color: ${({ theme }) => theme.colors.dark};
  }

  &:nth-child(1) {
    animation: ${UpToDown} 0.72s forwards;
    animation-delay: 0.32s;
  }

  &:nth-child(2) {
    animation: ${UpToDown} 0.72s forwards;
    animation-delay: 0.52s;
  }

  &:nth-child(3) {
    animation: ${UpToDown} 0.72s forwards;
    animation-delay: 0.72s;
  }
`;

export const Link = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.dark};

  padding: 12px 1rem;
  cursor: pointer;

  text-align: center;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
