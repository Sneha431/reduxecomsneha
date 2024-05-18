import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
// function MyApp() {
//   return (
//     <>
//       <h1>jjj</h1>
//     </>
//   );
// }

// function Anotherelement() {
//   return (
//     <>
//       <h1>jjdddj</h1>
//     </>
//   );
// }

const aelement = React.createElement(
  "a",
  {
    href: "https://github.com/Sneha431/react_practice",
    target: "_blank",
  },
  "Click to continue"
);

ReactDOM.createRoot(document.getElementById("root")).render(aelement);
