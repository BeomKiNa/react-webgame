import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import BallFunction from "./BallFunction";

const getNumbers = () => {
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);

  const shuffle = [];

  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }

  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((a, b) => a - b);
  return [...winNumbers, bonusNumber];
};

const LottoFunction = () => {
  const lottoNumbers = useMemo(() => getNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);

  const timeouts = useRef([]);

  const runTimeouts = () => {
    console.log("runTimeouts");
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevWinBalls) => {
          return [...prevWinBalls, winNumbers[i]];
        });
      }, (i + 1) * 1000);
    }

    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
  };

  useEffect(() => {
    console.log("useEffect");
    runTimeouts();
    console.log("로또 숫자를 생성합니다.");
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    }; // return하는 함수가 componentWillUnmount
  }, [timeouts.current]); // 빈 배열이면 componentDidMount와 동일
  // 배열에 요소가 있으면 componentDidMount와 componentDidUpdate 모두 수행

  const onClickRedo = useCallback(() => {
    console.log("onClickRedo");
    setWinNumbers(getNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, []);

  return (
    <main>
      <h1>당첨 숫자</h1>
      <div id="result">
        {winBalls.map((ball) => (
          <BallFunction key={ball} number={ball} />
        ))}
      </div>
      <h2>보너스 숫자</h2>
      {bonus && (
        <div id="bonus">
          <BallFunction number={bonus} />
        </div>
      )}
      {redo && <button onClick={onClickRedo}>다시 뽑기!</button>}
    </main>
  );
};

export default LottoFunction;
