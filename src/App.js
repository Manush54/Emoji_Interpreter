import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😄": "Smiling Face",
  "😉": "Winking Face",
  "😍": "Heart Eyes and Smiling Face",
  "😢": "Crying Face",
  "🤑": "Money Mouth Face",
  "🥱": "Yawning Face",
  "🍕": "Pizza"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("Input / Select an Emoji ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>
        Welcome to <span style={{ color: "green" }}>Emoji Interpreter</span>!!
      </h1>
      <h2>Select or Search any Emoji to know more about it!</h2>
      <input
        onChange={emojiInputHandler}
        placeholder="Type/Search any emoji here..."
      ></input>
      <h3 style={{ color: "green" }}> {meaning} </h3>
      <h2>Emojis we know..</h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            id="emojis"
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
