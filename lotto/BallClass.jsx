import React, { PureComponent } from "react";

class BallClass extends PureComponent {
  render() {
    const { number } = this.props;
    let background;
    if (number <= 10) {
      background = "red";
    } else if (number <= 20) {
      background = "orange";
    } else if (number <= 30) {
      background = "skyblue";
    } else if (number <= 40) {
      background = "gold";
    } else {
      background = "lightgreen";
    }
    return (
      <div className="ball" style={{ background }}>
        {number}
      </div>
    );
  }
}

export default BallClass;
