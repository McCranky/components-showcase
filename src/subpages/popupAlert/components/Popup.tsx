import React, { useEffect, useState } from "react";
import { Message, Progression, Wrapper } from "./Popup.styled";

interface Props {
  message: string;
  autoCloseTime: number;
  onTimeout: () => void;
}

const Popup = ({ message, autoCloseTime, onTimeout, ...props }: Props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setVisible(false);
      onTimeout();
    }, autoCloseTime * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [autoCloseTime, onTimeout]);

  return (
    <>
      {visible && (
        <Wrapper>
          <Message>{message}</Message>
          <Progression duration={autoCloseTime} />
        </Wrapper>
      )}
    </>
  );
};

export default Popup;
