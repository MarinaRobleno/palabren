import React, { useState } from "react";

export function Input({ setSubmittedWord }) {
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
    <form id="main-form" onSubmit={handleSubmitWord}>
      <input type="text" onChange={(e) => setFormWord(e.target.value)} />
    </form>
  );
}
