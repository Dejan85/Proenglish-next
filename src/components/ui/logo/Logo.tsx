import React from "react";
import Image from "next/image";

const Wrapper = "div";
const className: string = "logo";

const Logo = (): JSX.Element => {
  return (
    <Wrapper className={className}>
      <Image
        src="/logo/logo.png"
        alt="img"
        height="37px"
        width="138px"
        layout="responsive"
        loading="eager"
      />
    </Wrapper>
  );
};

export default Logo;
