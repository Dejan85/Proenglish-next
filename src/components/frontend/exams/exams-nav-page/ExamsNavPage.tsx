import React from "react";
import Image from "next/image";
import { ContentContainer, SubContainer } from "src/components/ui";
import LinkBox from "./partials/LinkBox";
import img from "public/home/course/img.jpg";
import { links } from "./constants";
import uniqid from "uniqid";

const ExamsNavPage: React.FC = (): JSX.Element => {
  return (
    <ContentContainer className="exams-nav-page">
      <ContentContainer className="exams-nav-page__dark-div" />
      <SubContainer className="exams-nav-page__content">
        <Image
          className="exams-nav-page__content-background"
          src={img}
          alt="ispiti"
          width="1300"
          height="950"
          objectFit="cover"
          placeholder="blur"
        />
        <ContentContainer className="exams-nav-page__yellow-div" />
      </SubContainer>

      <SubContainer className="exams-nav-page__nav-container">
        {links.map((link: { name: string; image: any; slug: string }) => (
          <LinkBox key={uniqid()} content={link} />
        ))}
      </SubContainer>
    </ContentContainer>
  );
};

export default ExamsNavPage;
