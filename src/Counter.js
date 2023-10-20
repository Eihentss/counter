import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const[multiply, setMultiply] = useState(2);

  return (
    <div>
       <input type="number" value={multiply} onChange={(event) => setMultiply(parseInt(event.target.value))}  />
       <button onClick={() => setCount(count - multiply)}>-{multiply}</button>
       <button onClick={() => setCount(count + multiply)}>+{multiply}</button>
      <button onClick={() => setCount(count * multiply)}>*{multiply}</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter;
