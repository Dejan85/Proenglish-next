import React from "react";
import { ContentContainer, Text, Heading } from "src/components/ui";
import {
  headingText,
  headingText2,
  text,
  text2,
  linkText,
  linkText2,
  linkPath,
} from "./messages";
import { useRouter } from "next/router";
import Image from "next/image";

const Course = (): JSX.Element => {
  const router = useRouter();

  const onClick = (e) => {
    e.preventDefault();
    router.push(e.target.href);
  };

  return (
    <>
      <ContentContainer className="home-course">
        <ContentContainer className="home-course__left-image-container">
          <Image
            alt="img"
            src="/home/course/img.jpg"
            layout="fill"
            objectFit="cover"
            loading="eager"
            priority
          />
        </ContentContainer>
        <ContentContainer className="home-course__right-text-container">
          <ContentContainer className="home-course__right-text">
            <Heading as="h2" className="default-heading">
              {headingText}
            </Heading>
            <Text as="p" className="default-paragraph">
              {text}
            </Text>
            <a className="home-course__link" href={linkPath} onClick={onClick}>
              {linkText}
            </a>
          </ContentContainer>
        </ContentContainer>
      </ContentContainer>

      <ContentContainer className="home-course home-course--no-margin-top ">
        <ContentContainer className="home-course__left-text-container home-course__left-text-container--order-2">
          <ContentContainer className="home-course__left-text">
            <Heading as="h2" className="default-heading">
              {headingText2}
            </Heading>
            <Text as="p" className="default-paragraph">
              {text2}
            </Text>
            <a className="home-course__link" href={linkPath} onClick={onClick}>
              {linkText2}
            </a>
          </ContentContainer>
        </ContentContainer>
        <ContentContainer className="home-course__right-image-container home-course__right-image-container--order-1">
          <Image
            alt="img"
            src="/home/course/img2.jpg"
            layout="fill"
            objectFit="cover"
            loading="eager"
            priority
          />
        </ContentContainer>
      </ContentContainer>
    </>
  );
};

export default Course;
