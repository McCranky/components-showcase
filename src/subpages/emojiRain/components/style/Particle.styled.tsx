import styled from "styled-components";

export const Wrapper = styled.span<{ yPosition: number; duration: number }>`
  position: fixed;
  top: -5vh;
  /* left: ${Math.floor(Math.random() * 100)}vw; */
  left: ${({ yPosition }) => yPosition}vw;

  transform: translateY(0);
  animation: fall ${({ duration }) => duration}s linear;

  @keyframes fall {
    to {
      transform: translateY(105vh);
    }
  }
`;
