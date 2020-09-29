import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  to {
    background-color: rgba(0,0,0,0);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: black;
  width: 100vw;
  height: 100vh;
  text-align: center;
  vertical-align: middle;

  animation: ${fadeOut} 10s linear forwards;
`;

export const Progression = styled.div<{ duration: number }>`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: pink;
  z-index: -1;
  animation-fill-mode: forwards;
  animation: shrink ${({ duration }) => duration + 0.2}s linear 1;

  @keyframes shrink {
    to {
      transform: translateY(105vh);
    }
  }
`;

export const Message = styled.h2`
  background-color: #e67e22;
  border-radius: 10px;
  border: #d35400 2px solid;
  padding: 1rem 1rem;
`;
