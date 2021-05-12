import React from "react";
import { SubContainerProps } from "./types";

const Wrapper = "div";
const className: string = "sub-container";

const SubContainer = (props: SubContainerProps): JSX.Element => {
  const { children, className: customClassName } = props;
  return (
    <Wrapper
      className={
        customClassName ? `${className} ${customClassName}` : className
      }
    >
      {children}
    </Wrapper>
  );
};

export default SubContainer;
