import React, { memo, useContext } from "react";
import { TableContext } from "./MineSearch";
import Td from "./Td";

const Tr = memo(({ rowIndex }) => {
  const { tableData, dispatch } = useContext(TableContext);
  return (
    <tr>
      {tableData[0] &&
        Array(tableData[0].length)
          .fill()
          .map((td, index) => (
            <Td key={index} rowIndex={rowIndex} cellIndex={index} />
          ))}
    </tr>
  );
});

export default Tr;
