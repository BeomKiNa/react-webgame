import React, { memo, useCallback, useContext, useMemo } from "react";
import {
  TableContext,
  CODE,
  OPEN_CELL,
  CLICK_MINE,
  QUESTION_CELL,
  FLAG_CELL,
  NORMALIZE_CELL,
} from "./MineSearch";

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return { background: "#444" };
    case CODE.OPENED:
    case CODE.CLICKED_MINE:
      return { background: "#fff" };
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return { background: "red" };
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return { background: "orange" };
    default:
      return { background: "#fff" };
  }
};

const getTdText = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return "";
    case CODE.MINE:
      return "X";
    case CODE.CLICKED_MINE:
      return "펑";
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return "!";
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return "?";
    default:
      return code || "";
  }
};

const Td = memo(({ rowIndex, cellIndex }) => {
  const { tableData, dispatch, halted } = useContext(TableContext);

  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (halted) {
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.OPENED:
      case CODE.FLAG:
      case CODE.FLAG_MINE:
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        return;
      case CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.MINE:
        dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });
        return;
      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);

  const onRightClickTd = useCallback(
    (e) => {
      e.preventDefault();
      if (halted) {
        return;
      }
      console.log(rowIndex, cellIndex);
      switch (tableData[rowIndex][cellIndex]) {
        case CODE.OPENED:
        case CODE.CLICKED_MINE:
          return;
        case CODE.NORMAL:
        case CODE.MINE:
          dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex });
          return;
        case CODE.FLAG:
        case CODE.FLAG_MINE:
          dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex });
          return;
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
          dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex });
          return;
        default:
          return;
      }
    },
    [tableData[rowIndex][cellIndex], halted]
  );

  // return useMemo(
  //   () => (
  //     <td
  //       style={getTdStyle(tableData[rowIndex][cellIndex])}
  //       onClick={onClickTd}
  //       onContextMenu={onRightClickTd}
  //     >
  //       {getTdText(tableData[rowIndex][cellIndex])}
  //     </td>
  //   ),
  //   [tableData[rowIndex][cellIndex]]
  // );
  // useMemo를 사용한 방법

  return (
    <RealTd
      onClickTd={onClickTd}
      onRightClickTd={onRightClickTd}
      data={tableData[rowIndex][cellIndex]}
    />
  );
  // 컴포넌트 분리 후  memo를 사용한 방법
});

const RealTd = memo(({ onClickTd, onRightClickTd, data }) => {
  console.log("real td rendered");
  return (
    <td
      style={getTdStyle(data)}
      onClick={onClickTd}
      onContextMenu={onRightClickTd}
    >
      {getTdText(data)}
    </td>
  );
});

export default Td;
