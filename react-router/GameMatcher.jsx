// 동적 라우트 매칭
import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
import NumberBaseballClass from "../number-baseball/NumberBaseballClass";
import RSPClass from "../rsp/RSPClass";
import LottoClass from "../lotto/LottoClass";

class GameMatcher extends Component {
  render() {
    console.log(this.props);
    const {
      match: {
        params: { name },
      },
      location: { search },
    } = this.props;

    const urlSearchParams = new URLSearchParams(search.slice(1));

    console.log("Params", name);
    console.log("Query String", search);
    console.log("Query String key:hello----", urlSearchParams.get("hello"));
    if (name === "number-baseball") {
      return <NumberBaseballClass />;
    }

    if (name === "rsp") {
      return <RSPClass />;
    }

    if (name === "lotto") {
      return <LottoClass />;
    }

    return <div>일치하는 게임이 없습니다.</div>;
  }
}

export default GameMatcher;
// export default withRouter(GameMatcher);
// component가 Route에 연결이 되어있으면, props에 history, match, location이 존재하지만
// 연결이 되어있지않아 존재하지 않을때 withRouter로 감싸면 생긴다.
