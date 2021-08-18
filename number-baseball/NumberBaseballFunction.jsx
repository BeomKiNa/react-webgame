import React, { memo, useRef, useState } from "react";
import TryFunction from "./TryFunction";

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

const NumberBaseballFunction = memo(() => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  const inputRef = useRef(null);

  const restart = () => {
    setTimeout(() => {
      alert("게임을 다시 시작합니다.");
      setResult("");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
    }, 500);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      value.length !== 4 ||
      value.includes(0) ||
      Array.from(new Set(value)).length !== 4
    ) {
      alert("0을 제외한 서로 다른 4개의 숫자를 입력해야합니다");
      setValue("");
      inputRef.current.focus();
      return;
    }

    if (value === answer.join("")) {
      setResult("홈런!");
      setTries((prevTries) => [...prevTries, { try: value, result: "홈런!" }]);
      restart();
    } else {
      const valueArray = value.split("").map((e) => parseInt(e));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 정답은 ${answer.join()} 였습니다!`);
        restart();
      } else {
        for (let i = 0; i < answer.length; i++) {
          if (valueArray[i] === answer[i]) {
            strike++;
          } else if (answer.includes(valueArray[i])) {
            ball++;
          }
        }

        setResult(`${strike} 스트라이크 ${ball} 볼`);
        setValue("");
        setTries((prevTries) => [
          ...prevTries,
          {
            try: value,
            result: `${strike} 스트라이크 ${ball} 볼`,
          },
        ]);
      }
    }
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          type="number"
          value={value}
          onChange={onChangeInput}
        />
        <button>입력</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((tryInfo, i) => (
          <TryFunction key={`${i + 1}차 시도`} tryInfo={tryInfo} />
        ))}
      </ul>
    </>
  );
});

export default NumberBaseballFunction;
