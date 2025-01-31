// const redirectIfDevToolsOpen = () => {
//   window.location.href = "/yareyarexuo09"; 
// };

// const detectDevToolsUsingTiming = () => {
//   let start = performance.now();
//   debugger; 
//   let timeTaken = performance.now() - start;

//   if (timeTaken > 100) {
//     redirectIfDevToolsOpen();
//   }
// };


// const handleResize = () => {
//       const initialHeight = window.innerHeight;
//       const initialWidth = window.innerWidth;
//       const initialPixelRatio = window.devicePixelRatio;
//       const heightDifference = window.innerHeight - initialHeight;
//       const widthDifference = window.innerWidth - initialWidth;
//       const pixelRatioDifference = window.devicePixelRatio - initialPixelRatio;
//       console.log(pixelRatioDifference , heightDifference , widthDifference)
//       if (Math.abs(pixelRatioDifference) < 0.1 && (heightDifference > 200 || widthDifference > 200)) {
//         redirectIfDevToolsOpen();
//       }
//       //  else return;
//     };

// const detectConsoleOpen = () => {
//   const element = new Image();
//   Object.defineProperty(element, "id", {
//     get: function () {
//       redirectIfDevToolsOpen();
//     },
//   });
//   console.log("%c", element);
// };


// const detectDevToolsByEvents = () => {
//   window.addEventListener("resize", handleResize);
//   window.addEventListener("keydown", (e) => {
//     if (
//       (e.ctrlKey && e.shiftKey && e.key === "I") || 
//       (e.ctrlKey && e.shiftKey && e.key === "J") || 
//       (e.ctrlKey && e.key === "U") ||
//       (e.key === "F12")
//     ) {
//       e.preventDefault();
//       redirectIfDevToolsOpen();
//     }
//   });
// };

// detectDevToolsByEvents();
// detectDevToolsUsingTiming();
// detectConsoleOpen();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
