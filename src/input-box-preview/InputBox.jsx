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

///////
// import React, { useState } from "react";
// import axios from "axios";

// export default function SimpleForm() {
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [serverMsg, setServerMsg] = useState(null);

//   const validate = (name, value) => {
//     let error = "";

//     if (!value.trim()) {
//       error = `${name} is required`;
//     } else {
//       if (name === "email") {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(value)) {
//           error = "Invalid email format";
//         }
//       }

//       if (name === "password" && value.length < 6) {
//         error = "Password must be at least 6 characters";
//       }
//     }

//     return error;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setValues((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Final validation pass
//     const newErrors = {};
//     Object.keys(values).forEach((key) => {
//       const error = validate(key, values[key]);
//       if (error) newErrors[key] = error;
//     });

//     setErrors(newErrors);
//     if (Object.keys(newErrors).length > 0) return;

//     try {
//       setLoading(true);
//       setServerMsg(null);

//       const res = await axios.post("https://example.com/api/register", values);

//       setServerMsg({ type: "success", text: "Registered successfully!" });
//       console.log("Server response:", res.data);

//       setValues({ name: "", email: "", password: "" });
//     } catch (err) {
//       setServerMsg({
//         type: "error",
//         text:
//           err.response?.data?.message ||
//           "Something went wrong. Please try again.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "40px auto", fontFamily: "sans-serif" }}>
//       <h2>Register</h2>

//       <form onSubmit={handleSubmit} noValidate>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={values.name}
//             onChange={handleChange}
//           />
//           {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
//         </div>

//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={values.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//         </div>

//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={values.password}
//             onChange={handleChange}
//           />
//           {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
//         </div>

//         <button type="submit" disabled={loading}>
//           {loading ? "Submitting..." : "Submit"}
//         </button>
//       </form>

//       {serverMsg && (
//         <p style={{ color: serverMsg.type === "error" ? "red" : "green" }}>
//           {serverMsg.text}
//         </p>
//       )}
//     </div>
//   );
// }

////
// api.js
// import axios from "axios";

// export const api = axios.create({
//   baseURL: "https://example.com/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
