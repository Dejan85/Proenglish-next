import { SubContainer, Text } from "src/components/ui";
import React from "react";
import SatFirstSection from "./partials/SatFirstSection";
import SatTableSection from "./partials/SatTableSection";

const Sat: React.FC = (): JSX.Element => {
  return (
    <>
      <SatFirstSection />

      <SubContainer className="toefl__table-section">
        <Text as="p" className="toefl__table-title">
          SAT ispit se sastoji iz 2 dela, a nekadašnji prvi deo ispita - esej –
          ukinut je 2021. godine. Budući da SAT u Americi služi kao prijemni
          ispit, sasvim je očekivano da je potpuno na engleskom i da ne
          proverava poznavanje gramatike engleskog jezika niti nastoji da utvrdi
          koliko dobro srednjoškolci koriste engleski. To je ono što SAT test
          čini teškim: SAT test kombinuje veštine čitanja, kritičkog
          razmišljanja i logičkog zaključivanja kroz svoja dva dela koje mi
          obično nazivamo engleski i matematika, a koji su mnogo kompleksniji
          nego što zvuče ili izgledaju na prvi pogled.
        </Text>
        <SatTableSection />
        {/* <ToeflTableAndImageSection /> */}
      </SubContainer>
    </>
  );
};

export default Sat;
