import React, { memo, useCallback, useEffect, useRef } from "react";
import { CLICK_CELL } from "./TicTacToeFunction";

const Td = memo(({ rowIndex, cellIndex, cellData, dispatch }) => {
  // const ref = useRef([]);
  // useEffect(() => {
  //   console.log(
  //     rowIndex === ref.current[0],
  //     cellIndex === ref.current[1],
  //     cellData === ref.current[2],
  //     dispatch === ref.current[3]
  //   );
  //   console.log("cell-data", cellData, ref.current[2]);
  //   ref.current = [rowIndex, cellIndex, cellData, dispatch];
  // }, [rowIndex, cellIndex, cellData, dispatch]);
  // 최적화를 위해 검사하는 방법

  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex, cellData);
    if (cellData) {
      return;
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);

  return <td onClick={onClickTd}>{cellData}</td>;
});

export default Td;
