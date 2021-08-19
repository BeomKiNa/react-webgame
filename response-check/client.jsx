import React from "react";
import ReactDOM from "react-dom";
import ResponseCheckClass from "./ResponseCheckClass";
import ResponseCheckFunction from "./ResponseCheckFunction";
import "./App.css";

ReactDOM.render(
  <>
    <ResponseCheckClass />
    <ResponseCheckFunction />
  </>,
  document.querySelector("#root")
);
