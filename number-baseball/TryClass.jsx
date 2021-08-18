import React, { PureComponent } from "react";

class TryClass extends PureComponent {
  render() {
    const { tryInfo } = this.props;
    return <li>{`${tryInfo.try} : ${tryInfo.result}`}</li>;
  }
}

export default TryClass;
