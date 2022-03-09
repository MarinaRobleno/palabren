import React, { useEffect, useState } from "react";
import { Square } from "./Square";

export function Line({ word, correctWord, setSolved }) {
  const [correctLetters, setCorrectLetters] = useState(
    correctWord.toUpperCase().split("")
  );
  useEffect(() => {
    if (word === correctWord) {
      setSolved(true);
    }
  }, [word]);
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
