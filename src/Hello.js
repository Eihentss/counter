
import React, { useState } from "react";
function Hellos() {
  const [input, setInput] = useState("");
  return (
    <div> 
       <input  value={input} onChange={(event) => setInput(event.target.value)}  />
      <h1>Hello {input}</h1>
    </div>
  );
}

export default Hellos;
