import React, { useState } from "react";
import { Square } from "./Square";

export function Line({ word, correctWord }) {
  const [correctLetters, setCorrectLetters] = useState(
    correctWord.toUpperCase().split("")
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {word != null &&
        word
          .split("")
          .map((letter, index) => (
            <Square
              letter={letter}
              correctLetters={correctLetters}
              index={index}
            />
          ))}
    </div>
  );
}
