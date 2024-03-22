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

const DownToUp = keyframes`
  from {
    opacity: 0.72;
    transform: translate3d(5px, 0px, 0);
    filter: brightness(1.02);
  }
  to {
    opacity: 1;
    transform: translate3d(0px, 50px, 0);
    filter: brightness(1.05);
  }
`;

export const Container = styled.main`
  max-width: 82vw;
  margin: 280px auto 25px auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: start;

  padding: 1rem 0;
  height: auto;
`;

/* @Info */

export const Info = styled.div`
  /* height: 100%; */
`;

/* @Wap */
export const Wrap = styled.div`
  opacity: 0;

  width: 220px;
  margin: 0 auto 48px auto;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding-bottom: 1rem;
  border-bottom: 1px solid #f2f2f2;

  transition: 0.32s ease-in-out !important;

  &.active {
    animation: ${UpToDown} 0.72s forwards;
  }

  &:nth-child(1) {
    animation-delay: 0.32s;
  }

  &:nth-child(2) {
    animation-delay: 0.52s;
  }

  &:nth-child(3) {
    animation-delay: 0.72s;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};

  text-align: center;
  letter-spacing: 1px;

  display: flex;
  align-items: flex-end;

  margin: 4px;
`;

export const Description = styled.p`
  width: 210px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1.5rem;

  text-align: center;

  &.align-center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
`;

/* @Image */

export const Product = styled.div`
  opacity: 0;

  &.active {
    animation: ${UpToDown} 0.72s forwards;
    animation-delay: 1s;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  animation: ${DownToUp} 1s infinite alternate;
`;
