import React from "react";
import { Wrapper } from "..";

const TheaderContainer: React.FC = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  return (
    <Wrapper as="div" className="exams-table__table-theader-container">
      {children}
    </Wrapper>
  );
};

export default TheaderContainer;
