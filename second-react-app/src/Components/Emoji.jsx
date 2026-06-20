import { useState } from "react";

function EmojiChanger() {
  const [emoji, setEmoji] = useState("happy");

  const setTheEmoji = () => {
    if (emoji === "happy") {
      setEmoji("sad");
    } else {
      setEmoji("happy");
    }
  };
  return (
    <div>
        <h2>Current emoji: {emoji}</h2>
      <button onClick={setTheEmoji}>Change emoji</button>
    </div>
  );
}

export default EmojiChanger;
