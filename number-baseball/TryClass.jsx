import React, { Component } from "react";

class TryClass extends Component {
  render() {
    const { tryInfo } = this.props;
    return <li>{`${tryInfo.try} : ${tryInfo.result}`}</li>;
  }
}

export default TryClass;
