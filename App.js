/*
    <div id="parent">
        <div id = "child">
            <h1>Hello from h1 tag</h1>
            <h2>Hello from h2 tag</h2>
        </div>
    </div>

*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im h1 tag"),
    React.createElement("h2", {}, "Im h2 bro"),
  ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(parent);
