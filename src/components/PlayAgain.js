import React from "react";

export function PlayAgain() {
  const handlePlayAgain = () => {
    window.location.reload();
  };
  return (
    <div>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
}
