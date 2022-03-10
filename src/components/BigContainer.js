import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Line } from "./Line";

export function BigContainer({
  submittedWord,
  correctWord,
  setSolved,
  setAttemptCounter,
}) {
  const [submittedWords, setSubmittedWords] = useState([]);

  useEffect(() => {
    setSubmittedWords((prev) => [...prev, submittedWord]);
    setAttemptCounter((prev) => prev + 1);
  }, [submittedWord]);

  return (
    <Paper
      sx={{ width: "300px", height: "300px", margin: "20px", padding: "10px" }}
    >
      {submittedWords.map((word) => (
        <>
          <Line word={word} correctWord={correctWord} setSolved={setSolved} />
        </>
      ))}
    </Paper>
  );
}
