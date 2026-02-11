import React, { useState } from "react";

function Practice() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        Click Me-{show ? "hide" : "show"}
      </button>
      {show && <h1>Practice Component</h1>}
    </>
  );
}

export default Practice;

// here we r doing 2 thing -
//only showing the text if its say show= true
//changing the text of button on click -
// if show is true then it will show hide and if its false then it will show show.
