import React from "react";
import { Wrapper } from "./style/Particle.styled";

interface Props {
  emoji: string;
  yPosition: number;
  duration: number;
}

const Particle = ({ emoji, yPosition, duration, ...props }: Props) => {
  return (
    <Wrapper role="img" aria-label="particle" yPosition={yPosition} duration={duration}>
      {emoji}
    </Wrapper>
  );
};

export default Particle;
