import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Results() {
  const [victories, setVictories] = useState(null);
  useEffect(() => {
    setVictories(localStorage.getItem("palabren"));
  }, []);
  return (
    <div>
      <h1 style={{ color: "white" }}>
        You have won {victories ? victories : 0} times!
      </h1>
      <Link to={"/palabren"}>
        <button>Back to Gaming!</button>
      </Link>
    </div>
  );
}
