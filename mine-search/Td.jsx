import React, { useCallback, useContext } from "react";
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

const Td = ({ rowIndex, cellIndex }) => {
  const { tableData, dispatch, halted } = useContext(TableContext);
  const cellData = tableData[rowIndex][cellIndex];

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

  return (
    <td
      style={getTdStyle(cellData)}
      onClick={onClickTd}
      onContextMenu={onRightClickTd}
    >
      {getTdText(cellData)}
    </td>
  );
};

export default Td;
