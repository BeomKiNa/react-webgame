import React from "react";
import ReactDOM from "react-dom";
import WordRelayClass from "./WordRelayClass";
import WordRelayFunction from "./WordRelayFunction";

const root = document.querySelector("#root");

ReactDOM.render(
  <>
    <WordRelayClass />
    <WordRelayFunction />
  </>,
  root
);
