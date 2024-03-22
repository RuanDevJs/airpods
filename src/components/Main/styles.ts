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
    transform: translate3d(5px, 0px, 0);
  }
  to {
    transform: translate3d(0px, 50px, 0);
  }
`;

const Scroll = keyframes`
  from {
    transform: translate3d(0, 10px, 0);
  }
  to {
    transform: translate3d(0, 0px, 0);
  }
`;

/* @End Animations */

export const Container = styled.main`
  max-width: 82vw;
  margin: 1rem auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  padding: 1rem 0;
  height: 80vh;
`;

/* @Info */

export const Info = styled.div`
  width: 50vw;
`;

export const Title = styled.h1`
  opacity: 0;
  font-size: 7rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};

  animation: ${UpToDown} 0.82s forwards;
  animation-delay: 1s;

  text-align: center;
  letter-spacing: 4px;
`;

export const Description = styled.p`
  opacity: 0;

  font-size: 12px;
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1.5rem;

  animation: ${UpToDown} 0.82s forwards;
  animation-delay: 1.5s;

  text-align: left;
`;

/* @Phones */

export const Phones = styled.div`
  opacity: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${UpToDown} 0.82s forwards;
  animation-delay: 1.8s;
  transition: 0.32s ease-in-out;

  img {
    max-width: 100%;
    height: 320px;

    object-fit: cover;
    transition: 0.62s ease-in-out;

    &:nth-child(1) {
      animation: ${DownToUp} 0.82s infinite alternate;
      transition: cubic-bezier(0.165, 0.84, 0.44, 1);
      animation-delay: 0.32s;
    }

    &:nth-child(2) {
      animation: ${DownToUp} 0.82s infinite alternate;
      transition: cubic-bezier(0.165, 0.84, 0.44, 1);
      animation-delay: 0.52s;
    }

    &:hover {
      opacity: 0.72;
      transition: 0.32s ease-in-out;
    }

    cursor: pointer;
  }

  /* &:hover img {
    transform: rotate3d(0, 0, 1, 60deg) !important;
  } */
`;

/* @Scroll Down */

export const ScrollDown = styled.div`
  cursor: pointer;

  opacity: 0;
  animation: ${UpToDown} 0.82s forwards;
  animation-delay: 1.8s;
  transition: 0.32s ease-in-out;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;

  padding: 2rem;

  div {
    text-align: center;
  }

  svg {
    /* animation: ${Scroll} 0.82s infinite alternate;
    transition: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-delay: 0.32s; */
  }
`;

export const ScrollContainer = styled.div`
  opacity: 0.72;
  animation: ${Scroll} 0.82s infinite alternate;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-delay: 0.32s;
`;

export const ScrollText = styled.div`
  padding: 8px;

  display: flex;
  gap: 4px;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: #c2c2c2;
  }
`;
