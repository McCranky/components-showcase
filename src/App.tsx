import React from "react";
import "./App.css";
// import EmojiRain from "./subpages/emojiRain/EmojiRain";
import PopupAlert from "./subpages/popupAlert/PopupAlert";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <EmojiRain /> */}
        <PopupAlert message="Testin message 👻" autoCloseTime={5} />
      </header>
    </div>
  );
}

export default App;
