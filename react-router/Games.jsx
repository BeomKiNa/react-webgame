import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Link,
  Route,
  Switch,
} from "react-router-dom";
// import NumberBaseballClass from "../number-baseball/NumberBaseballClass";
// import RSPClass from "../rsp/RSPClass";
// import LottoClass from "../lotto/LottoClass";
// Function Component는 import한 React가 여러 개라서 에러가 발생 Class Component는 이 에러가 발생하지 않음
import GameMatcher from "./GameMatcher";

const Games = () => {
  return (
    <BrowserRouter>
      <ul>
        {/* 공통인 부분 */}
        <li>
          <Link to="/game/number-baseball?query=10&hello=world&bye=react">
            Number Baseball
          </Link>
        </li>
        <li>
          <Link to="/game/rsp">Rock Scissors Paper</Link>
        </li>
        <li>
          <Link to="/game/lotto">Lotto</Link>
        </li>
        <li>
          <Link to="/game/index">Game Matcher</Link>
        </li>
      </ul>
      <div>
        {/* <Route path="/number-baseball" component={NumberBaseballClass}></Route>
        <Route path="/rsp" component={RSPClass}></Route>
        <Route path="/lotto" component={LottoClass}></Route> */}
        {/* <Route path="/game/:name" component={GameMatcher}></Route> */}
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <GameMatcher {...props} />}
          ></Route>
          <Route
            path="/game/:name"
            render={(props) => <GameMatcher {...props} />}
          ></Route>
          {/* 동적 라우트 매칭 */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Games;
