import React from "react";
import Image from "next/image";

const Wrapper = "div";
const className: string = "logo";

const Logo = (): JSX.Element => {
  return (
    <Wrapper className={className}>
      <Image src="/logo/logo.png" alt="img" layout="fill" />
    </Wrapper>
  );
};

export default Logo;
