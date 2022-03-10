import React, { useEffect, useState } from "react";
import { BigContainer } from "../components/BigContainer";
import { Input } from "../components/Input";
import { PlayAgain } from "../components/PlayAgain";
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
  return (
    <>
      <h1>PALABREN</h1>
      {/*<div>{correctWord}</div>*/}
      <Input
        setSubmittedWord={setSubmittedWord}
        solved={solved}
        attemptCounter={attemptCounter}
      />
      {attemptCounter === 6 ? <h2>{correctWord}</h2> : null}
      <BigContainer
        submittedWord={submittedWord}
        correctWord={correctWord}
        setSolved={setSolved}
        setAttemptCounter={setAttemptCounter}
      />
      {solved ? <PlayAgain /> : null}
    </>
  );
}
