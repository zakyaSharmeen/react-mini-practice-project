import { useState } from "react";

function Change() {
  const [text, setText] = useState("Click Me");

  return <button onClick={() => setText("Clicked!")}>{text}</button>;
}

export default Change;
