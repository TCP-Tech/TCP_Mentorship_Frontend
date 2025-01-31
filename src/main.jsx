const r=()=>{window.location.href="/yareyarexuo09"};const d=()=>{let t=performance.now();debugger;let e=performance.now()-t;e>100&&r()};const h=()=>{const t=window.innerHeight,a=window.innerWidth,n=window.devicePixelRatio,c=window.innerHeight-t,l=window.innerWidth-a,s=window.devicePixelRatio-n;console.log(s,c,l);Math.abs(s)<.1&&(c>200||l>200)&&r()};const o=()=>{const t=new Image();Object.defineProperty(t,"id",{get:function(){r()}});console.log("%c",t)};const x=()=>{window.addEventListener("resize",h);window.addEventListener("keydown",e=>{(e.ctrlKey&&e.shiftKey&&e.key==="I"||(e.ctrlKey&&e.shiftKey&&e.key==="J")||(e.ctrlKey&&e.key==="U")||e.key==="F12")&&(e.preventDefault(),r())})};x();d();o();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
