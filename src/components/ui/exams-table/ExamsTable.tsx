import React from "react";
import { ContentContainer } from "..";
import TableTheader from "./TableTheader";
import TheaderContainer from "./TheaderContainer";
import { ExamsTableProps } from "./types";

const ExamsTable = ({ children }: ExamsTableProps): JSX.Element => {
  return (
    <ContentContainer className="exams-table">{children}</ContentContainer>
  );
};

ExamsTable.TheaderContainer = TheaderContainer;
ExamsTable.TableTheader = TableTheader;

export default ExamsTable;
