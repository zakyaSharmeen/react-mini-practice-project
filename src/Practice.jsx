import React, { useState } from "react";

function Practice() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>Counter app</h1>
      <button onClick={() => setNum(num + 1)}>+</button>
      <h2>{num}</h2>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
}

export default Practice;
