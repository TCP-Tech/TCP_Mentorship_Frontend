// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// // import DevToolsDetector from 'devtools-detector';

// const useDetectDevTools = () => {
//   const navigate = useNavigate();

// //   useEffect(() => {
// //     const redirect = () => {
// //       navigate("/yareyarexuo09");
// //     };

// //     // Function to check for any unusual changes in the window size or console behavior
// //     const checkForDevTools = () => {
// //       // Check if the window height or width is unusually large (this could indicate DevTools open)
// //       const outerHeight = window.outerHeight;
// //       const innerHeight = window.innerHeight;

// //       // A significant difference in height could indicate that the DevTools have been opened
// //       if (outerHeight - innerHeight > 200) {
// //         redirect();
// //       }

// //       // Optionally, we can use `console` behavior to detect dev tools (this can be tricky)
// //       const start = performance.now();
// //       console.log("%c", "color: transparent"); // Just a log with a custom style
// //       const timeTaken = performance.now() - start;

// //       // If the time taken for the log is unusually long, we assume DevTools are open
// //       if (timeTaken > 100) {
// //         redirect();
// //       }
// //     };

// //     // Checking at regular intervals
// //     const interval = setInterval(checkForDevTools, 1000);

// //     // Handle key press events like opening DevTools via shortcuts (F12, Ctrl + Shift + I)
// //     const handleKeyDown = (e) => {
// //       if (
// //         (e.ctrlKey && e.shiftKey && e.key === "I") ||
// //         (e.ctrlKey && e.shiftKey && e.key === "J") ||
// //         (e.ctrlKey && e.key === "U") ||
// //         e.key === "F12"
// //       ) {
// //         e.preventDefault(); // Prevent the default action
// //         redirect();
// //       }
// //     };

// //     // Attach events to check for DevTools
// //     window.addEventListener("keydown", handleKeyDown);

// //     // Cleanup
// //     return () => {
// //       clearInterval(interval);
// //       window.removeEventListener("keydown", handleKeyDown);
// //     };
// //   }, [navigate]);

// // useEffect(() => {
// //     const handleDevToolsOpened = () => {
// //     //   alert("Opened")
// //     navigate("/yareyarexuo09")
// //     //   window.location.href = '/restricted'; 
// //     };
// //     // console.log(Dev)

// //     DevToolsDetector.addListener((isOpen) => {
// //       if (isOpen) {
// //         handleDevToolsOpened();
// //       }
// //     });

// //     DevToolsDetector.launch(); 

// //     return () => {
// //       DevToolsDetector.stop();
// //     };
// //   }, []);


//   return null;
// };

// export default useDetectDevTools;


import { addListener, launch } from 'devtools-detector';

import React from 'react'
import { useNavigate } from 'react-router-dom';

const useDetectDevTools = () => {
    const navigate = useNavigate();
    addListener((isOpen) => {
      isOpen && navigate("/yareyarexuo09")
    });
    
 launch();
  return (
    null
  )
}

export default useDetectDevTools
