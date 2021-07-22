import { ContentContainer, Wrapper } from "src/components/ui";
import React from "react";
import {
  theaderInlineStyles,
  theaderInlineLightOrangeStyles,
  theaderInlineBorderStyles,
} from "../constants";
import Image from "next/image";
import gmatImg from "public/exams/exams-nav-page/GMAT.jpg";

const ToeflTableAndImageSection: React.FC = (): JSX.Element => {
  return (
    <ContentContainer className="toefl__table-and-image-section">
      <Wrapper as="div" className="toefl__table-and-image-section-table">
        <Wrapper
          as="div"
          className="toefl__table-theader-container"
          style={theaderInlineBorderStyles}
        >
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

        <Wrapper
          as="div"
          className="toefl__table-theader-container"
          style={theaderInlineBorderStyles}
        >
          <Wrapper
            as="div"
            className="toefl__table-theader"
            style={theaderInlineLightOrangeStyles}
          >
            C1 - Advanced
          </Wrapper>
          <Wrapper
            as="div"
            className="toefl__table-theader"
            style={theaderInlineLightOrangeStyles}
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

        <Wrapper
          as="div"
          className="toefl__table-theader-container"
          style={theaderInlineBorderStyles}
        >
          <Wrapper
            as="div"
            className="toefl__table-theader"
            style={theaderInlineLightOrangeStyles}
          >
            B1 - Intermediate
          </Wrapper>
          <Wrapper
            as="div"
            className="toefl__table-theader"
            style={theaderInlineLightOrangeStyles}
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

        <Wrapper
          as="div"
          className="toefl__table-theader-container"
          style={theaderInlineBorderStyles}
        >
          <Wrapper
            as="div"
            className="toefl__table-theader"
            style={theaderInlineLightOrangeStyles}
          >
            A1 - Elementary
          </Wrapper>
          <Wrapper
            as="div"
            className="toefl__table-theader"
            style={theaderInlineLightOrangeStyles}
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
  );
};

export default ToeflTableAndImageSection;
