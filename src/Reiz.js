import Counter from "./Counter";
import React, { useState } from "react";
function Reiz() {
  const [counts, setCounts] = useState(5);
  return (
    <div>
      <button onClick={() => setCounts(counts * 2)}>*2</button>
      <button onClick={() => setCounts(counts / 2)}>/2</button>
      <h1>{counts}</h1>
    </div>
  );
}

export default Reiz;
