import React, { memo } from "react";
import Tr from "./Tr";

const Table = memo(({ tableData, dispatch }) => {
  return (
    <table>
      <tbody>
        {Array(tableData.length)
          .fill()
          .map((tr, i) => (
            <Tr
              key={`row${i + 1}`}
              rowIndex={i}
              rowData={tableData[i]}
              dispatch={dispatch}
            />
          ))}
      </tbody>
    </table>
  );
});

export default Table;
