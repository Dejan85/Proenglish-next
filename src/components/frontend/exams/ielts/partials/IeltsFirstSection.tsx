import {
  Container,
  ContentContainer,
  EmptyElement,
  Heading,
  SubContainer,
  Wrapper,
  Text,
} from "src/components/ui";
import React from "react";
import toeflImg from "public/exams/exams-nav-page/toefl.jpg";
import Image from "next/image";

const IeltsFirstSection: React.FC = (): JSX.Element => {
  return (
    <Container className="toefl__first-section">
      <SubContainer className="toefl">
        <ContentContainer className="toefl__heading-container">
          <EmptyElement as="div" className="toefl__heading-circle" />
          <Heading className="toefl__heading" as="h1">
            IELTS test
          </Heading>
        </ContentContainer>
        <ContentContainer className="toefl__text-container">
          <Text className="toefl__text" as="p">
            IELTS je test je jedan od najpriznatijih i najzastupljenijih testova
            engleskog. Položen IELTS test je dokaz da je vaše znanje engleskog
            na nivou koji je dovoljan za studije i/ili život u inostranstvu.
          </Text>
          <Wrapper as="div">
            <Image
              src={toeflImg}
              alt="toefl"
              objectFit="cover"
              placeholder="blur"
              width="400"
              height="400"
              className="toefl__text-img"
            />
          </Wrapper>
        </ContentContainer>
      </SubContainer>
    </Container>
  );
};

export default IeltsFirstSection;
