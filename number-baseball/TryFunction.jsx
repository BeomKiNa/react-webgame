import React, { Component } from "react";

const TryFunction = ({ tryInfo }) => {
  return <li>{`${tryInfo.try} : ${tryInfo.result}`}</li>;
};

export default TryFunction;
