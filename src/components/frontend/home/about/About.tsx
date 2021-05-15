import React from "react";
import {
  ContentContainer,
  SubContainer,
  Text,
  Heading,
} from "src/components/ui";
import { aboutText, headingText, linkText } from "./messages";
import uniqid from "uniqid";
import { useRouter } from "next/router";
import Image from "next/image";

const About = (): JSX.Element => {
  const router = useRouter();

  const onClick = (e) => {
    e.preventdDefault();
    router.push(e.target.href);
  };

  return (
    <SubContainer className="home-about">
      <ContentContainer className="home-about__content">
        <ContentContainer className="home-about__text">
          <Heading as="h2" className="home-about__heading">
            {headingText}
          </Heading>
          {aboutText.map(
            (text: string): JSX.Element => (
              <ContentContainer
                className="home-about__text--container"
                key={uniqid()}
              >
                <Text as="p" className="default-paragraph">
                  {text}
                </Text>
              </ContentContainer>
            )
          )}
          <a className="home-about__link" href="/onama" onClick={onClick}>
            {linkText}
          </a>
        </ContentContainer>
        <ContentContainer className="home-about__image-container">
          <Image
            className="home-about__image"
            alt="img"
            src="/home/about/img.jpg"
            layout="fill"
            objectFit="cover"
            loading="eager"
            priority
          />
        </ContentContainer>
      </ContentContainer>
    </SubContainer>
  );
};

export default About;
