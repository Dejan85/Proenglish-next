import React from "react";
import {
  Container,
  ContentContainer,
  EmptyElement,
  Heading,
  SubContainer,
  Text,
  Wrapper,
} from "..";
import Image from "next/image";
import { ExamsHeadingSectionProps } from "./types";

const ExamsHeadingSection: React.FC<ExamsHeadingSectionProps> = ({
  content: { h1, text, image, styles },
}): JSX.Element => {
  return (
    <Container className="exams-heading-section">
      <SubContainer className="exams-heading-section">
        <ContentContainer className="exams-heading-section__heading-container">
          <EmptyElement
            as="div"
            className="exams-heading-section__heading-circle"
            style={styles}
          />
          <Heading
            className="exams-heading-section__heading"
            as="h1"
            style={{ color: styles.color }}
          >
            {h1}
          </Heading>
        </ContentContainer>
        <ContentContainer className="exams-heading-section__text-container">
          <Text className="exams-heading-section__text" as="p">
            {text}
          </Text>
          <Wrapper as="div">
            <Image
              src={image}
              alt="exams-heading-section"
              objectFit="cover"
              placeholder="blur"
              width="400"
              height="400"
              className="exams-heading-section__text-img"
            />
          </Wrapper>
        </ContentContainer>
      </SubContainer>
    </Container>
  );
};

export default ExamsHeadingSection;
