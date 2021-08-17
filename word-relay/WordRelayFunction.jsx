import React, { useRef, useState } from "react";
import words from "./words";

const WordRelayFunction = () => {
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setValue("");
      setWord((prevWord) => {
        return value;
      });
    } else {
      setResult("땡");
      setValue("");
    }
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={onChangeInput}
        />
        {/* value 와 onChange는 세트, onChange를 쓰지 않을거라면 defaultValue */}
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelayFunction;
