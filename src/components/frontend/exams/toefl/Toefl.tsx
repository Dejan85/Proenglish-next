import React from "react";
import {
  SubContainer,
  EmptyElement,
  ContentContainer,
  Heading,
  Text,
  Container,
  Wrapper,
} from "src/components/ui";
import {
  h1,
  text,
  toeflTableTitle,
  theaderInlineStyles,
  theaderInlineOrangeStyles,
  belowTableText,
} from "./constants";
import toeflImg from "public/exams/exams-nav-page/toefl.jpg";
import Image from "next/image";
import gmatImg from "public/exams/exams-nav-page/GMAT.jpg";
import ToeflFirstSection from "./partials/ToeflFirstSection";

const Toefl: React.FC = (): JSX.Element => {
  return (
    <>
      <ToeflFirstSection />
      <SubContainer className="toefl__table-section">
        <Text as="p" className="toefl__table-title">
          {toeflTableTitle}
        </Text>

        <ContentContainer className="toefl__table">
          <Wrapper as="div" className="toefl__table-theader-container">
            <Wrapper as="div" className="toefl__table-theader">
              Deo ispita
            </Wrapper>
            <Wrapper as="div" className="toefl__table-theader">
              Trajanje
            </Wrapper>
            <Wrapper as="div" className="toefl__table-theader">
              Broj pitanja / zadataka
            </Wrapper>
          </Wrapper>

          <Wrapper as="div" className="toefl__table-theader-container">
            <Wrapper
              as="div"
              className="toefl__table-theader"
              style={theaderInlineStyles}
            >
              Reading
            </Wrapper>
            <Wrapper
              as="div"
              className="toefl__table-theader"
              style={theaderInlineStyles}
            >
              54-72 minuta
            </Wrapper>
            <Wrapper
              as="div"
              className="toefl__table-theader"
              style={theaderInlineStyles}
            >
              30-40 pitanja
            </Wrapper>
          </Wrapper>

          <Wrapper as="div" className="toefl__table-theader-container">
            <Wrapper
              as="div"
              className="toefl__table-theader"
              style={theaderInlineOrangeStyles}
            >
              Listening
            </Wrapper>
            <Wrapper
              as="div"
              className="toefl__table-theader"
              style={theaderInlineOrangeStyles}
            >
              41-57 minuta
            </Wrapper>
            <Wrapper
              as="div"
              className="toefl__table-theader"
              style={theaderInlineOrangeStyles}
            >
              28-39 pitanja
            </Wrapper>
          </Wrapper>

          <Wrapper as="div" className="toefl__table-theader-container">
            <Wrapper
              as="div"
              className="toefl__table-theader"
              style={theaderInlineStyles}
            >
              Pauza
            </Wrapper>
            <Wrapper
              as="div"
              className="toefl__table-theader"
              style={theaderInlineStyles}
            >
              10 minuta
            </Wrapper>
            <Wrapper
              as="div"
              className="toefl__table-theader"
              style={theaderInlineStyles}
            >
              --
            </Wrapper>
          </Wrapper>

          <Wrapper as="div" className="toefl__table-theader-container">
            <Wrapper
              as="div"
              className="toefl__table-theader"
              style={theaderInlineOrangeStyles}
            >
              Speaking
            </Wrapper>
            <Wrapper
              as="div"
              className="toefl__table-theader"
              style={theaderInlineOrangeStyles}
            >
              17 minuta
            </Wrapper>
            <Wrapper
              as="div"
              className="toefl__table-theader"
              style={theaderInlineOrangeStyles}
            >
              4 zadatka
            </Wrapper>
          </Wrapper>

          <Wrapper as="div" className="toefl__table-theader-container">
            <Wrapper
              as="div"
              className="toefl__table-theader"
              style={theaderInlineStyles}
            >
              Writing
            </Wrapper>
            <Wrapper
              as="div"
              className="toefl__table-theader"
              style={theaderInlineStyles}
            >
              50 minuta
            </Wrapper>
            <Wrapper
              as="div"
              className="toefl__table-theader"
              style={theaderInlineStyles}
            >
              2 zadatka
            </Wrapper>
          </Wrapper>

          <Text className="toefl__below-table-text" as="p">
            {belowTableText}
          </Text>
        </ContentContainer>

        <ContentContainer className="toefl__table-and-image-section">
          <Wrapper as="div" className="toefl__table-and-image-section-table">
            <Wrapper as="div" className="toefl__table-theader-container">
              <Wrapper as="div" className="toefl__table-theader">
                CEFR skala
              </Wrapper>
              <Wrapper as="div" className="toefl__table-theader">
                TOEFL
              </Wrapper>
            </Wrapper>

            <Wrapper as="div" className="toefl__table-theader-container">
              <Wrapper
                as="div"
                className="toefl__table-theader"
                style={theaderInlineStyles}
              >
                C2 - Proficiency
              </Wrapper>
              <Wrapper
                as="div"
                className="toefl__table-theader"
                style={theaderInlineStyles}
              >
                110-120
              </Wrapper>
            </Wrapper>

            <Wrapper as="div" className="toefl__table-theader-container">
              <Wrapper
                as="div"
                className="toefl__table-theader"
                style={theaderInlineOrangeStyles}
              >
                C1 - Advanced
              </Wrapper>
              <Wrapper
                as="div"
                className="toefl__table-theader"
                style={theaderInlineOrangeStyles}
              >
                79-114
              </Wrapper>
            </Wrapper>

            <Wrapper as="div" className="toefl__table-theader-container">
              <Wrapper
                as="div"
                className="toefl__table-theader"
                style={theaderInlineStyles}
              >
                B2 - Upper-intermediate
              </Wrapper>
              <Wrapper
                as="div"
                className="toefl__table-theader"
                style={theaderInlineStyles}
              >
                53-93
              </Wrapper>
            </Wrapper>

            <Wrapper as="div" className="toefl__table-theader-container">
              <Wrapper
                as="div"
                className="toefl__table-theader"
                style={theaderInlineOrangeStyles}
              >
                B1 - Intermediate
              </Wrapper>
              <Wrapper
                as="div"
                className="toefl__table-theader"
                style={theaderInlineOrangeStyles}
              >
                35-64
              </Wrapper>
            </Wrapper>

            <Wrapper as="div" className="toefl__table-theader-container">
              <Wrapper
                as="div"
                className="toefl__table-theader"
                style={theaderInlineStyles}
              >
                A2 - Pre-intermediate
              </Wrapper>
              <Wrapper
                as="div"
                className="toefl__table-theader"
                style={theaderInlineStyles}
              >
                30-34
              </Wrapper>
            </Wrapper>

            <Wrapper as="div" className="toefl__table-theader-container">
              <Wrapper
                as="div"
                className="toefl__table-theader"
                style={theaderInlineOrangeStyles}
              >
                A1 - Elementary
              </Wrapper>
              <Wrapper
                as="div"
                className="toefl__table-theader"
                style={theaderInlineOrangeStyles}
              >
                0-30
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper as="div" className="toefl__table-and-image-section-image">
            <Image
              src={gmatImg}
              alt="cefr skala"
              objectFit="cover"
              placeholder="blur"
              width="500"
            />
          </Wrapper>
        </ContentContainer>
      </SubContainer>
    </>
  );
};

export default Toefl;
