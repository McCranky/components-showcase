import React, { useState } from "react";
import Popup from "./components/Popup";
import { Button, Input } from "./PopupAlert.styled";

interface Props {}

const PopupAlert = (props: Props) => {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const handlePopupClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Input
        type="text"
        defaultValue={message}
        onChange={(value) => setMessage(value.currentTarget.value)}
      />
      <Button onClick={() => setVisible(true)}>show popup</Button>
      {visible && (
        <Popup message={message} autoCloseTime={10} onTimeout={handlePopupClose} />
      )}
    </>
  );
};

export default PopupAlert;
