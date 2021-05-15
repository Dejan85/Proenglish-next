import React from "react";
import { LabelProps } from "./types";

const Wrapper = "label";

const Label = (props: LabelProps) => {
  const { children, className, htmlFor } = props;
  return (
    <Wrapper htmlFor={htmlFor} className={className}>
      {children}
    </Wrapper>
  );
};

export default Label;
