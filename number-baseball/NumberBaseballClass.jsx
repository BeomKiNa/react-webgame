import React, { PureComponent } from "react";
import TryClass from "./TryClass";

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseballClass extends PureComponent {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };

  restart = () => {
    setTimeout(() => {
      alert("게임을 다시 시작합니다.");
      this.setState({
        result: "",
        value: "",
        answer: getNumbers(),
        tries: [],
      });
    }, 500);
  };

  onSubmitForm = (e) => {
    const { value, answer, tries } = this.state;
    e.preventDefault();
    if (
      value.length !== 4 ||
      value.includes(0) ||
      Array.from(new Set(value)).length !== 4
    ) {
      alert("0을 제외한 서로 다른 4개의 숫자를 입력해야합니다");
      this.setState({ value: "" });
      this.input.focus();
      return;
    }

    if (value === answer.join("")) {
      this.setState((prevState) => {
        return {
          result: "홈런!",
          tries: [...prevState.tries, { try: value, result: "홈런!" }],
        };
      });
      this.restart();
    } else {
      const valueArray = value.split("").map((e) => parseInt(e));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        this.setState({
          result: `10번 넘게 틀려서 실패! 정답은 ${answer.join()} 였습니다!`,
        });
        this.restart();
      } else {
        for (let i = 0; i < answer.length; i++) {
          if (valueArray[i] === answer[i]) {
            strike++;
          } else if (answer.includes(valueArray[i])) {
            ball++;
          }
        }

        this.setState((prevState) => {
          return {
            result: `${strike} 스트라이크 ${ball} 볼`,
            value: "",
            tries: [
              ...prevState.tries,
              {
                try: value,
                result: `${strike} 스트라이크 ${ball} 볼`,
              },
            ],
          };
        });
      }
    }
    this.input.focus();
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  input;

  inputRef = (c) => {
    this.input = c;
  };

  render() {
    const { result, value, tries } = this.state;
    return (
      <>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.inputRef}
            type="number"
            value={value}
            onChange={this.onChangeInput}
          />
          <button>입력</button>
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((tryInfo, i) => (
            <TryClass key={`${i + 1}차 시도`} tryInfo={tryInfo} />
          ))}
        </ul>
      </>
    );
  }
}

export default NumberBaseballClass;
