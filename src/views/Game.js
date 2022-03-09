import React, { useState } from "react";
import { BigContainer } from "../components/BigContainer";
import { Input } from "../components/Input";
import { PlayAgain } from "../components/PlayAgain";

export function Game() {
  const [submittedWord, setSubmittedWord] = useState(null);
  const [correctWord, setCorrectWord] = useState("verga");
  const [solved, setSolved] = useState(false);
  return (
    <>
      <h1>PALABREN</h1>
      {/*<div>{correctWord}</div>*/}
      <Input setSubmittedWord={setSubmittedWord} solved={solved} />
      <BigContainer
        submittedWord={submittedWord}
        correctWord={correctWord}
        setSolved={setSolved}
      />
      {solved ? <PlayAgain /> : null}
    </>
  );
}
