import React, { Component } from "react";
import words from "./words";

class WordRelayClass extends Component {
  state = {
    word: words[Math.floor(Math.random() * words.length)],
    value: "",
    result: "",
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    const { word, value } = this.state;
    if (word[word.length - 1] === value[0]) {
      this.setState((prevState) => {
        return { result: "딩동댕", value: "", word: prevState.value };
      });
    } else {
      this.setState({ result: "땡", value: "" });
    }
    this.input.focus();
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  input;

  onRefInput = (c) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            type="text"
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          {/* value 와 onChange는 세트, onChange를 쓰지 않을거라면 defaultValue */}
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default WordRelayClass;
