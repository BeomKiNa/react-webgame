const React = require("react");
const ReactDom = require("react-dom");

const LikeButton = require("./LikeButton");

ReactDom.render(
  <>
    <LikeButton />
    <LikeButton />
    <LikeButton />
    <LikeButton />
  </>,
  document.querySelector("#root")
);
