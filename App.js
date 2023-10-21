/*
    <div id="parent">
        <div id = "child">
            <h1>Hello from h1 tag</h1>
            <h2>Hello from h2 tag</h2>
        </div>
    </div>

*/
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React 🚀"),
    React.createElement("h2", {}, "Im h2 bro"),
  ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(parent);
