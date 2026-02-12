// import React from "react";

// function InputBox() {
//   return (
//     <div>
//       <h1>hii zakya u have to do it</h1>
//       <p>just focus on ur self and evrything will be set</p>
//     </div>
//   );
// }

// export default InputBox;
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>Preview: {text}</p>
    </div>
  );
}

export default App;
