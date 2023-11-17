import React from "react";
import ReactDOM from "react-dom";

import Tree from "./Tree.jsx";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Tree />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
