import React from "react";
import { Wrapper } from "..";
import { TableTheaderProps } from "./types";

const TableTheader = ({
  children,
  style = {},
}: TableTheaderProps): JSX.Element => {
  return (
    <Wrapper as="div" className="exams-table__table-theader" style={style}>
      {children}
    </Wrapper>
  );
};

export default TableTheader;
