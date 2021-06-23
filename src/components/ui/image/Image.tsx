/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ImageProps } from "./types";

const Wrapper = "div";

const Image = (props: ImageProps): JSX.Element => {
  const { src: srcProp, alt, type = "img", className: customClassName } = props;
  const base64: string = `data:image/png;base64,${srcProp}`;
  const src: string = type === "base64" ? base64 : srcProp;
  const className: string = "image";

  return (
    <Wrapper
      className={
        customClassName
          ? `${className} ${className} ${customClassName}`
          : className
      }
    >
      <img alt={alt} src={src} />
    </Wrapper>
  );
};

export default Image;
