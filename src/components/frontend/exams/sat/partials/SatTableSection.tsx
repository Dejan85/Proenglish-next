import React from "react";
import { ContentContainer, Wrapper } from "src/components/ui";
import { theaderInlineGreenStyles, theaderInlineStyles } from "../constants";
import { greenColors } from "../constants";

const SatTableSection: React.FC = (): JSX.Element => {
  return (
    <ContentContainer className="toefl__table">
      <Wrapper as="div" className="toefl__table-theader-container">
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={{ background: greenColors.darkGreen, color: "black" }}
        >
          Reading test and Writing and Language test
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={{ background: greenColors.darkGreen, color: "black" }}
        >
          Math test
        </Wrapper>
      </Wrapper>

      <Wrapper as="div" className="toefl__table-theader-container">
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          Delovi testa
        </Wrapper>
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
          Writing and Language
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          Deo testa bez digitrona
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          Deo testa sa digitronom
        </Wrapper>
      </Wrapper>

      <Wrapper as="div" className="toefl__table-theader-container">
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineGreenStyles}
        >
          Vremenska odrednica
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineGreenStyles}
        >
          65 minuta
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineGreenStyles}
        >
          35 minuta
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineGreenStyles}
        >
          25 minuta
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineGreenStyles}
        >
          55 minuta
        </Wrapper>
      </Wrapper>

      <Wrapper as="div" className="toefl__table-theader-container">
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          Pitanja po oblastima
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          52 pitanja
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          44 pitanja
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          20 pitanja
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          38 pitanja
        </Wrapper>
      </Wrapper>

      <Wrapper as="div" className="toefl__table-theader-container">
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineGreenStyles}
        >
          Opseg bodova
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineGreenStyles}
        >
          200 - 800
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineGreenStyles}
        >
          {" "}
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineGreenStyles}
        >
          200 - 800
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineGreenStyles}
        >
          {" "}
        </Wrapper>
      </Wrapper>

      <Wrapper as="div" className="toefl__table-theader-container">
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          Ukupan broj bodova
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          400 - 1600
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          {" "}
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          {" "}
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          {" "}
        </Wrapper>
      </Wrapper>
    </ContentContainer>
  );
};

export default SatTableSection;
