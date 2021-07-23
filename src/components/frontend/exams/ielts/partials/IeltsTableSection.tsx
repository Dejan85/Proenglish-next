import React from "react";
import { ContentContainer, Wrapper, Text } from "src/components/ui";
import { theaderInlineOrangeStyles, theaderInlineStyles } from "../constants";
import Link from "next/link";

const IeltsTableSection: React.FC = (): JSX.Element => {
  return (
    <ContentContainer className="toefl__table">
      <Wrapper as="div" className="toefl__table-theader-container">
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={{ background: "#808080" }}
        >
          {""}
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={{ background: "#808080" }}
        >
          Academic
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={{ background: "#808080" }}
        >
          Vremenska odrednica
        </Wrapper>
      </Wrapper>

      <Wrapper as="div" className="toefl__table-theader-container">
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          Analytical Writing Pisanje eseja
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          Dva zadatka
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          60 minuta
        </Wrapper>
      </Wrapper>

      <Wrapper as="div" className="toefl__table-theader-container">
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineOrangeStyles}
        >
          Verba Reasoning
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineOrangeStyles}
        >
          Dva dela po 20 pitanja
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineOrangeStyles}
        >
          30 minuta za svaki deo
        </Wrapper>
      </Wrapper>

      <Wrapper as="div" className="toefl__table-theader-container">
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          Quantitative Reasoning
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          Dva dela po 20 pitanja
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          30 minuta za svaki deo
        </Wrapper>
      </Wrapper>

      <Text className="toefl__below-table-text" as="p">
        IELTS test se ocenjuje na skali od 1 do 9, a ocena koja je potrebna za
        studije u inostranstvu je najčešće 6.5 iz svakog pojedinačnog dela
        testa. Tabela prikazuje od čega se sastoji test, a band score (ukupan
        rezultat) se dobija na osnovu aritmetičke sredine ocena iz svakog
        pojedinačnog dela.
      </Text>

      <p className="toefl__below-table-text">
        Zvanični rezultati IELTS izlaze 10 radnih dana nakon polaganja testa, a
        možete ih preuzeti lično u Britanskom savetu ili prijavom na IELTS
        servis koji se nalazi na sledećem linku:{" "}
        <Link href="https://v2.ereg.ets.org/ereg/public/jump?_p=TEL">
          <a>https://v2.ereg.ets.org/ereg/public/jump?_p=TEL</a>
        </Link>
        . Svoje nezvanične rezultate možete da saznate od 5 do 7 dana nakon
        polaganja testa na ovom linku:{" "}
        <Link href="https://ielts.idp.com/results/check-your-result">
          <a>https://ielts.idp.com/results/check-your-result</a>
        </Link>
        .{" "}
      </p>

      <Text className="toefl__below-table-text" as="p">
        Vreme potrebno za pripremu se određuje nakon što se uradi procena vašeg
        trenutnog aktivnog znanja engleskog, vaša tačnost u izradi pasivnog dela
        testa i vaše veštine pisanja na engleskom. Tabela ispod daje okviran
        rezultat koji možete da postignete uz pripremu.
      </Text>
    </ContentContainer>
  );
};

export default IeltsTableSection;
