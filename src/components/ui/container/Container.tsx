import React from "react";
import { ContainerProps } from "./types";

const Wrapper = "div";

const Container = (props: ContainerProps): JSX.Element => {
  const { children, className: customClassName } = props;
  const className: string = customClassName
    ? `${customClassName} container`
    : "container";

  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Container;
