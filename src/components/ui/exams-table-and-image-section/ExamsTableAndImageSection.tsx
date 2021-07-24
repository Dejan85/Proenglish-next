import React from "react";
import Image from "next/image";
import { ContentContainer, Wrapper, Text, ExamsTableSection } from "..";
import { ExamsTableAndImageSectionProps } from "./types";

const ExamsTableAndImageSection: React.FC<ExamsTableAndImageSectionProps> = ({
  content: { text, img, table, styles },
}): JSX.Element => {
  return (
    <ContentContainer className="exams__table-and-image-section-container">
      <Text className="exams__text" as="p">
        {text}
      </Text>
      <ContentContainer className="exams__table-and-image-section">
        <Wrapper as="div" className="exams__table-and-image-section-table">
          <ExamsTableSection content={{ table, styles }} />
        </Wrapper>

        <Wrapper as="div" className="exams__table-and-image-section-image">
          <Image
            src={img}
            alt="cefr skala"
            objectFit="cover"
            placeholder="blur"
            width="500"
          />
        </Wrapper>
      </ContentContainer>
    </ContentContainer>
  );
};

export default ExamsTableAndImageSection;
