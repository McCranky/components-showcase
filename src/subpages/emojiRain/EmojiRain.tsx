import React, { useCallback, useEffect, useRef, useState } from "react";
import "./components/style/Particle.scss";

interface Props {}

interface Part {
  emoji: string;
  yPosition: number;
  duration: number;
  visible: boolean;
}

const EmojiRain = (props: Props) => {
  const [active, setActive] = useState(false);
  const [particlesCount, setParticlesCount] = useState(0);
  const particles = useRef<HTMLDivElement>(null);
  const emojis = ["🍏", "🍎", "🍐", "🍊", "🍋", "💧"];

  /*const createParticle = () => {
    const duration = Math.random() * 2 + 3;

    setParticles((old) => {
      let temp = old.filter((p) => p);
      temp.push({
        emoji: "✨",
        duration: duration,
        yPosition: Math.floor(Math.random() * 100),
        visible: true,
      });
      return temp;
    });

    const timeout = setTimeout(() => {
      setParticles((old) => {
        const arr = old.filter((item, index) => index != 0);
        return arr;
      });
    }, duration * 1000);

    return () => {
      clearTimeout(timeout);
    };
  };*/

  const memoGenerateParticle = useCallback(() => {
    const duration = Math.random() * 2 + 3;
    const particle = document.createElement("div");
    particle.classList.add("heart");

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = duration + "s";
    particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    particles.current?.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, duration * 1000);
  }, [emojis]);

  useEffect(() => {
    let interval = 0;
    if (active) {
      interval = setTimeout(() => {
        memoGenerateParticle();
        setParticlesCount((old) => old + 1);
      }, 200);
    }
    return () => {
      clearTimeout(interval);
    };
  }, [active, particlesCount, memoGenerateParticle]);

  return (
    <div ref={particles}>
      {/* {parts.map((particle) => particle)} */}
      {/* {particles.map(
        (part, index) =>
          part.visible && (
            <Particle
              key={index}
              emoji={part.emoji}
              yPosition={part.yPosition}
              duration={part.duration}
            />
          )
      )} */}

      <button className={active ? "active" : ""} onClick={() => setActive(!active)}>
        Magic{" "}
        <span role="img" aria-label="wizard">
          🧙‍♂️
        </span>
      </button>
    </div>
  );
};

export default EmojiRain;
