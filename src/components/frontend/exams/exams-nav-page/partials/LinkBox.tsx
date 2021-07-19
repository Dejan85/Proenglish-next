import React from "react";
import { ContentContainer, Text } from "src/components/ui";
import { LinkBoxProps } from "../types";
import Image from "next/image";
import img from "public/course/background.jpg";

const LinkBox: React.FC<LinkBoxProps> = ({ content }): JSX.Element => {
  return (
    <ContentContainer className="link-box">
      <Image
        className="link-box__img"
        src={img}
        alt="test"
        width="220"
        height="220"
        objectFit="cover"
      />
      <Text className="link-box__text" as="p">
        {content.name}
      </Text>
    </ContentContainer>
  );
};

export default LinkBox;
