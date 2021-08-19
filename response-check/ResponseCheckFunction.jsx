import React, { useRef, useState } from "react";

const ResponseCheckFunction = () => {
  const [state, setState] = useState("wating");
  const [message, setMessage] = useState("클릭해서 시작하세요");
  const [results, setResults] = useState([]);
  const timeId = useRef(null);
  const startTime = useRef(null);
  const endTime = useRef(null);

  const onClickScreen = () => {
    if (state === "wating") {
      // 대기
      setState("ready");
      setMessage("초록색이 되면 클릭하세요");

      timeId.current = setTimeout(() => {
        startTime.current = new Date();
        setState("start");
        setMessage("클릭하세요!");
      }, Math.floor(Math.random() * 1000 + 2000)); // 2초 ~ 3초 사이 랜덤
    } else if (state === "ready") {
      // 준비
      setState("wating");
      setMessage("너무 성급하시군요!");
      clearTimeout(timeId.current);
    } else if (state === "start") {
      // 시작
      endTime.current = new Date();
      console.log(`반응속도 ${endTime.current - startTime.current}ms`);
      setState("wating");
      setMessage("클릭해서 시작하세요");
      setResults((prevResults) => [
        ...prevResults,
        endTime.current - startTime.current,
      ]);
    }
  };

  const onReset = () => {
    setResults([]);
  };

  const renderAverage = () => {
    return results.length ? (
      <>
        <p id="result">
          평균 시간: {results.reduce((a, c) => a + c) / results.length}
          ms
        </p>
        <button onClick={onReset}>Reset!</button>
      </>
    ) : null;
  };

  return (
    <>
      <div id="box" className={state} onClick={onClickScreen}>
        <span>{message}</span>
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheckFunction;
