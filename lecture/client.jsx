const React = require("react");
const ReactDOM = require("react-dom");

const LikeButton = require("./LikeButton");

ReactDOM.render(
  <>
    <LikeButton />
    <LikeButton />
    <LikeButton />
    <LikeButton />
  </>,
  document.querySelector("#root")
);
