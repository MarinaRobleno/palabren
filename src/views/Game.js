import React, { useEffect, useState } from "react";
import { BigContainer } from "../components/BigContainer";
import { Input } from "../components/Input";
import { PlayAgain } from "../components/PlayAgain";
import { ShowScore } from "../components/ShowScore";
import { words } from "../data/sorted";

export function Game() {
  const [submittedWord, setSubmittedWord] = useState(null);
  const [correctWord, setCorrectWord] = useState("");
  const [solved, setSolved] = useState(false);
  const [attemptCounter, setAttemptCounter] = useState(-1);
  const arrayPalabras = words;

  useEffect(() => {
    setCorrectWord(
      arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)]
    );
  }, []);

  useEffect(() => {
    if (solved === true) {
      if (localStorage.getItem("palabren")) {
        let attempts = localStorage.getItem("palabren");
        localStorage.setItem("palabren", ++attempts);
      } else {
        localStorage.setItem("palabren", 1);
      }
    }
  }, [solved]);
  return (
    <>
      <h1 style={{ color: "white" }}>PALABREN</h1>
      <Input
        setSubmittedWord={setSubmittedWord}
        solved={solved}
        attemptCounter={attemptCounter}
      />
      {attemptCounter === 6 ? (
        <h2 style={{ color: "white" }}>{correctWord}</h2>
      ) : null}
      <BigContainer
        submittedWord={submittedWord}
        correctWord={correctWord}
        setSolved={setSolved}
        setAttemptCounter={setAttemptCounter}
      />
      {solved || attemptCounter === 6 ? <PlayAgain /> : null}
      <ShowScore />
    </>
  );
}
