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
import Image from "next/image";
import { customStyle } from "../constants";
import sat from "public/exams/exams-sat/sat.jpg";

const SatFirstSection: React.FC = (): JSX.Element => {
  return (
    <Container className="toefl__first-section">
      <SubContainer className="toefl">
        <ContentContainer className="toefl__heading-container">
          <EmptyElement
            as="div"
            className="toefl__heading-circle"
            style={customStyle}
          />
          <Heading
            className="toefl__heading"
            as="h1"
            style={{ color: customStyle.color }}
          >
            SAT test
          </Heading>
        </ContentContainer>
        <ContentContainer className="toefl__text-container">
          <Wrapper as="div">
            <Image
              src={sat}
              alt="toefl"
              objectFit="cover"
              placeholder="blur"
              width="400"
              height="400"
              className="toefl__text-img"
            />
          </Wrapper>
          <Text className="toefl__text" as="p">
            SAT ispit je potreban srednjoškolcima koji se spremaju za osnovne
            studije u inostranstvu. SAT ispit je nastao u Americi gde i danas
            služi kao obavezan prijemni ispit: svi srednjoškolci koji u Americi
            upisuju koledž ili fakultet moraju da polažu SAT. Samim time,
            srednjoškolci iz Evrope, pa i iz Srbije, naravno, koji žele da upišu
            osnovne studije u Americi moraju da polažu SAT. Pojedini koledži u
            Evropi, posebno u Italiji (Bocconi i Cattolica koji su visoko
            rangirani), takođe traže od budućih studenata da polože SAT ispit.
          </Text>
        </ContentContainer>
      </SubContainer>
    </Container>
  );
};

export default SatFirstSection;
