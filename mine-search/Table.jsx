import React, { memo, useContext } from "react";
import { TableContext } from "./MineSearch";
import Tr from "./Tr";

const Table = memo(() => {
  const { tableData, dispatch } = useContext(TableContext);

  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, index) => (
          <Tr key={index} rowIndex={index} />
        ))}
    </table>
  );
});

export default Table;
