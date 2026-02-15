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
// import { useState } from "react";

// function App() {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <input type="text" onChange={(e) => setText(e.target.value)} />
//       <p>Preview: {text}</p>
//     </div>
//   );
// }

// export default App;

//1️⃣ Progress is invisible while it’s happening

// When you’re learning Redux / React / anything technical, your brain is rewiring. That feels like confusion, not progress.
// The “ohhh I get it” moment usually shows up days or weeks after the grind. If you stop early, you miss the payoff.

// Real talk: feeling dumb = your brain is growing.

import React, { useState } from "react";

function InputBox() {
  const [click, setClick] = useState("click me please");

  return (
    <div>
      <button onClick={() => setClick("clicked bro chill")}>{click}</button>
    </div>
  );
}

export default InputBox;
