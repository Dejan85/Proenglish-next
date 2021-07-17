import React from "react";
import {
  ContentContainer,
  SubContainer,
  Heading,
  // Image,
  Loading,
} from "src/components/ui";
import { UiRenderProps } from "../types";
import parse from "html-react-parser";
import uniqid from "uniqid";
import Image from "next/image";

const UiRender = (props: UiRenderProps) => {
  const { aboutData } = props;

  return (
    <>
      <ContentContainer className="about__background">
        {/* <Image
          className="about__image slide-out-fwd-center"
          alt="img"
          src="/about/background.jpg"
          layout="fill"
          objectFit="cover"
          loading="eager"
        /> */}
      </ContentContainer>

      {aboutData?.length ? (
        aboutData.map((data: any, index: number) => {
          const { title, body } = data;
          return (
            <ContentContainer key={uniqid()} className="about">
              {index === 0 ? (
                <>
                  <SubContainer className="about__sub-container">
                    <Heading className="about__heading" as="h4">
                      {title}
                    </Heading>
                    <ContentContainer className="about__content">
                      <ContentContainer className="about__text">
                        {parse(body)}
                      </ContentContainer>
                      <ContentContainer className="about__image">
                        <Image
                          alt="img"
                          src="/about/image.jpg"
                          layout="fill"
                          objectFit="cover"
                          loading="eager"
                          priority
                        />
                      </ContentContainer>
                    </ContentContainer>
                  </SubContainer>
                </>
              ) : (
                <>
                  <ContentContainer className="about__background-2">
                    <Image
                      className="about__image"
                      alt="img"
                      src="/about/background.jpg"
                      layout="fill"
                      objectFit="cover"
                      loading="eager"
                      priority
                    />
                  </ContentContainer>

                  <SubContainer className="about__sub-container">
                    <Heading className="about__heading" as="h4">
                      {title}
                    </Heading>
                    <ContentContainer className="about__content">
                      <ContentContainer className="about__image">
                        <Image
                          alt="img"
                          src="/about/image2.jpg"
                          layout="fill"
                          objectFit="cover"
                          loading="eager"
                          priority
                        />
                      </ContentContainer>
                      <ContentContainer className="about__text-left">
                        {parse(body)}
                      </ContentContainer>
                    </ContentContainer>
                  </SubContainer>
                </>
              )}
            </ContentContainer>
          );
        })
      ) : (
        <Loading height="40vh" />
      )}
    </>
  );
};

export default UiRender;
