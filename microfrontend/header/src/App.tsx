import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div className="container">
    <div>Name: header</div>
    <div>Framework: react-18</div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);