import React from "react";
import {
  ContentContainer,
  SubContainer,
  Text,
  Line,
  Heading,
  ExperienceModal,
  CarouselUi,
  Image as ImageUi,
} from "src/components/ui";
import { headingText, studentsExperiance } from "./messages";
import uniqid from "uniqid";
import Image from "next/image";

const Render = (): JSX.Element => {
  return (
    <ContentContainer className="home-experience">
      <Image
        className="home-experience__background"
        src="/home/experience/background.jpg"
        alt="img"
        layout="fill"
        objectFit="cover"
        loading="eager"
        priority
      />
      <SubContainer className="home-experience__container">
        <ContentContainer className="home-experience__heading-container">
          <Heading className="home-experience__heading" as="h4">
            {headingText}
          </Heading>
          <Line>
            <Line.SmallLine />
            <Line.LargeLine />
          </Line>
        </ContentContainer>

        <CarouselUi>
          {studentsExperiance.map((item) => {
            const { exp, name, img } = item;

            return (
              <ContentContainer
                flexDirection="column"
                height="40rem"
                justifyContent="space-between"
                key={uniqid()}
              >
                <ContentContainer
                  marginTop="5rem"
                  flexDirection="column"
                  alignItems="center"
                >
                  <ExperienceModal>
                    <Text className="experience-modal-text" as="p">
                      {exp}
                    </Text>
                  </ExperienceModal>
                </ContentContainer>

                <ContentContainer
                  marginTop="5rem"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                  height="18rem"
                >
                  <ContentContainer width="13rem">
                    <ImageUi className="experience-img" alt="img" src={img} />
                  </ContentContainer>
                  <Text
                    className="experience-modal-name"
                    as="p"
                  >{`${name}`}</Text>
                </ContentContainer>
              </ContentContainer>
            );
          })}
        </CarouselUi>
      </SubContainer>
    </ContentContainer>
  );
};

const Experience = () => <Render />;

export default Experience;
