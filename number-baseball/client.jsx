import React from "react";
import { render } from "react-dom";
import NumberBaseballClass from "./NumberBaseballClass";
import NumberBaseballFunction from "./NumberBaseballFunction";

render(
  <>
    <NumberBaseballClass />
    <NumberBaseballFunction />
  </>,
  document.querySelector("#root")
);
