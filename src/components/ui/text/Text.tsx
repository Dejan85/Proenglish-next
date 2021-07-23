import React from "react";
import { TextProps } from "./types";

function Text(props: TextProps): JSX.Element {
  const { as = "p", className: customClassName, children, style = {} } = props;
  const Wrapper = as;
  const className: string = "default-paragraph";
  return (
    <Wrapper
      style={style}
      className={
        customClassName ? `${className} ${customClassName}` : className
      }
    >
      {children}
    </Wrapper>
  );
}

export default Text;
