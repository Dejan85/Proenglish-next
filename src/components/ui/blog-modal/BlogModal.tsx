import React from "react";
import { BlogModalProps } from "./types";

const Wrapper = "div";

const BlogModal = (props: BlogModalProps) => {
  const { children } = props;
  const className = "blog-modal";
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default BlogModal;
