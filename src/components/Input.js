import React, { useState } from "react";

export function Input({ setSubmittedWord, solved, attemptCounter }) {
  const [formWord, setFormWord] = useState(null);
  const mainForm = document.getElementById("main-form");
  const handleSubmitWord = (e) => {
    if (formWord.length !== 5) {
      e.preventDefault();
      alert("Must have 5 letters");
    } else {
      e.preventDefault();
      setSubmittedWord(formWord);
      mainForm.reset();
    }
  };
  return (
    <>
      {solved ? (
        <h2>You Solved It!</h2>
      ) : attemptCounter === 6 ? (
        <h2>You lost!</h2>
      ) : (
        <form id="main-form" onSubmit={handleSubmitWord}>
          <input type="text" onChange={(e) => setFormWord(e.target.value)} />
        </form>
      )}
    </>
  );
}
