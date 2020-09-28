import React, { useEffect, useState } from "react";
import { Wrapper, Progression } from "./style/PopupAlert.styled";

interface Props {
  message: string;
  autoCloseTime: number;
}

const PopupAlert = ({ message, autoCloseTime, ...props }: Props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setVisible(false), autoCloseTime * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [autoCloseTime]);

  return (
    <Wrapper>
      {visible && (
        <>
          <h2>{message}</h2>
          <Progression duration={autoCloseTime} />
        </>
      )}
    </Wrapper>
  );
};

export default PopupAlert;
