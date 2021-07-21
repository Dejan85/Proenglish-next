import React from "react";
import { ContentContainer, Text } from "src/components/ui";
import { LinkBoxProps } from "../types";
import Image from "next/image";
import Link from "next/link";

const LinkBox: React.FC<LinkBoxProps> = ({
  content: { name, image, slug },
}): JSX.Element => {
  return (
    <ContentContainer className="link-box">
      <Image
        className="link-box__img"
        src={image}
        alt="test"
        width="220"
        height="220"
        objectFit="cover"
        placeholder="blur"
      />
      <Link href={`/ispiti/${slug}`}>
        <a className="link-box__text default-paragraph">{name}</a>
      </Link>
    </ContentContainer>
  );
};

export default LinkBox;
