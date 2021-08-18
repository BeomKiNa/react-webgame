import React, { memo } from "react";

const TryFunction = memo(({ tryInfo }) => {
  return <li>{`${tryInfo.try} : ${tryInfo.result}`}</li>;
});

export default TryFunction;
