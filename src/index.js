import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import data from "./mock-data.js";

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
