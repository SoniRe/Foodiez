import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div id="heading">
    <img
      src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
      alt=""
    />
    <form>
      <input type="text" />
    </form>
    <img
      src="https://images.unsplash.com/photo-1504730030853-eff311f57d3c?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
