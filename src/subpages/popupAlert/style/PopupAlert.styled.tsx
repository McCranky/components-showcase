import styled from "styled-components";

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
  line-height: 100vh;

  &:before {
    background-color: pink;
    height: 30px;
    width: 90px;
  }
`;

export const Progression = styled.div<{ duration: number }>`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: pink;
  z-index: -1;
  animation: shrink ${({ duration }) => duration}s linear 1;

  @keyframes shrink {
    to {
      transform: translateY(105vh);
    }
  }
`;
