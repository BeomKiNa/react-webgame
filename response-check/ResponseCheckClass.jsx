import React, { Component } from "react";

class ResponseCheckClass extends Component {
  state = {
    state: "wating",
    message: "클릭해서 시작하세요",
    results: [],
  };

  timeId;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state } = this.state;
    if (state === "wating") {
      // 대기
      this.setState({
        state: "ready",
        message: "초록색이 되면 클릭하세요",
      });

      this.timeId = setTimeout(() => {
        this.startTime = new Date();
        this.setState({ state: "start", message: "클릭하세요!" });
      }, Math.floor(Math.random() * 1000 + 2000)); // 2초 ~ 3초 사이 랜덤
    } else if (state === "ready") {
      // 준비
      this.setState({ state: "wating", message: "너무 성급하시군요!" });
      clearTimeout(this.timeId);
    } else if (state === "start") {
      // 시작
      this.endTime = new Date();
      console.log(`반응속도 ${this.endTime - this.startTime}ms`);
      this.setState((prevState) => {
        return {
          state: "wating",
          message: "클릭해서 시작하세요",
          results: [...prevState.results, this.endTime - this.startTime],
        };
      });
    }
  };

  onReset = () => {
    this.setState({
      results: [],
    });
  };

  renderAverage = () => {
    const { results } = this.state;
    return results.length ? (
      <>
        <p id="result">
          평균 시간: {results.reduce((a, c) => a + c) / results.length}
          ms
        </p>
        <button onClick={this.onReset}>Reset!</button>
      </>
    ) : null;
  };

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div id="box" className={state} onClick={this.onClickScreen}>
          <span>{message}</span>
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheckClass;
