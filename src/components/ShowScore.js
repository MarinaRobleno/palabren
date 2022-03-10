import React from "react";
import { Link } from "react-router-dom";

export function ShowScore() {
  return (
    <div>
      <Link to={"/results"}>
        <button>Show Score</button>
      </Link>
    </div>
  );
}
