import React from "react";
import { ContentContainer, Wrapper, Text } from "src/components/ui";
import {
  belowTableText,
  theaderInlineOrangeStyles,
  theaderInlineStyles,
} from "../constants";

const ToeflTable: React.FC = (): JSX.Element => {
  return (
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
  );
};

export default ToeflTable;
