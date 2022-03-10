import React from "react";

export function Square({ letter, correctLetters, index }) {
  const colorPicker = (letter, correct) => {
    if (letter == correct) {
      return "green";
    } else if (letter != correct && correctLetters.includes(letter)) {
      return "#FAC033";
    } else {
      return "grey";
    }
  };
  return (
    <div
      style={{
        margin: "5px",
        fontSize: "30px",
        backgroundColor: colorPicker(
          letter.toUpperCase(),
          correctLetters[index]
        ),
        width: "40px",
        height: "40px",
        color: "white",
      }}
    >
      {letter.toUpperCase()}
    </div>
  );
}
