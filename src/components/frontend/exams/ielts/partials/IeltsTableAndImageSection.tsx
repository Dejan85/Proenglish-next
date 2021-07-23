import { ContentContainer, Wrapper } from "src/components/ui";
import React from "react";
import {
  theaderInlineStyles,
  theaderInlineLightOrangeStyles,
  theaderInlineBorderStyles,
} from "../constants";
import Image from "next/image";
import gmatImg from "public/exams/exams-nav-page/GMAT.jpg";

const IeltsTableAndImageSection: React.FC = (): JSX.Element => {
  return (
    <ContentContainer className="toefl__table-and-image-section">
      <Wrapper as="div" className="toefl__table-and-image-section-table">
        <Wrapper as="div" className="toefl__table-theader-container">
          <Wrapper
            as="div"
            className="toefl__table-theader"
            style={{ background: "#db545a" }}
          >
            CEFR skala
          </Wrapper>
          <Wrapper
            as="div"
            className="toefl__table-theader"
            style={{ background: "#db545a" }}
          >
            IELTS
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
            Band 8.0 - 9.0
          </Wrapper>
        </Wrapper>

        <Wrapper as="div" className="toefl__table-theader-container">
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
            Band 6.5 - 8.0
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
            Band 4.5 - 6.5
          </Wrapper>
        </Wrapper>

        <Wrapper as="div" className="toefl__table-theader-container">
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
            Band 3.5 -4.0
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
            Band 3.0
          </Wrapper>
        </Wrapper>

        <Wrapper as="div" className="toefl__table-theader-container">
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
            Band 1.0 - 2.5
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

export default IeltsTableAndImageSection;
