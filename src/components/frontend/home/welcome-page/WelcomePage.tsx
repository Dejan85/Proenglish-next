import React from "react";
import {
  Text,
  Heading,
  HomeIconsBoxes,
  SubContainer,
  ContentContainer,
} from "src/components/ui";
import { firstMsg, secondMsg } from "./messages";
import Image from "next/image";

const MemoizedUi: JSX.Element = (
  <>
    <ContentContainer className="welcome-page">
      <Image
        src="/home/welcome-page/image.jpg"
        alt="img"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="welcome-page__background slide-out-fwd-center"
        loading="eager"
        priority
      />
      <ContentContainer className="welcome-page__text">
        <Heading as="h1" className="welcome-page__heading">
          {firstMsg}
        </Heading>
        <Text as="p" className="welcome-page__paragraph">
          {secondMsg}
        </Text>
      </ContentContainer>
    </ContentContainer>
    <SubContainer>
      <HomeIconsBoxes />
    </SubContainer>
  </>
);

const WelcomePage = (): JSX.Element => MemoizedUi;

export default WelcomePage;
