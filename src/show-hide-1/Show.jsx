import { useState } from "react";

function Show() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>

      {show && <h1>Hello World</h1>}
    </div>
  );
}

export default Show;
