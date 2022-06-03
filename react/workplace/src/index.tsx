import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TesConnect from "./TesConnect";
import TesStage from "./TesStage";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TesConnect />
    <TesStage />
  </React.StrictMode>,
  document.getElementById("root")
);
