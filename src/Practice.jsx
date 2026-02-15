// import React from "react";

// function Practice() {
//   return (
//     <div>
//       <h1>always do the pratcice</h1>
//       <p>just believe and u r half ther</p>
//     </div>
//   );
// }

// export default Practice;

// 🧠 Real-Life Analogy (Sticky Note Version)

// Imagine a restaurant:

// 🧾 UI = customer

// 🗣️ dispatch(action) = customer places order

// 👨‍🍳 reducer = chef cooks

// 🧠 store = kitchen memory

// 👀 useSelector = waiter watching for updates

// 🍽️ UI re-renders = food arrives at table

//UI doesn’t change state directly.
// UI dispatches actions, reducers change the store,
// and UI reacts to store changes via useSelector.

import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>

      {show && <h1>hii zakya its easy pizzy</h1>}
    </div>
  );
}

export default App;
