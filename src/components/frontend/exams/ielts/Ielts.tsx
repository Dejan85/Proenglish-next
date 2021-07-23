import { SubContainer, Text } from "src/components/ui";
import React from "react";
import IeltsFirstSection from "./partials/IeltsFirstSection";
import IeltsTableSection from "./partials/IeltsTableSection";
import IeltsTableAndImageSection from "./partials/IeltsTableAndImageSection";
import Questions from "./partials/Questions";

const Ielts: React.FC = (): JSX.Element => {
  return (
    <>
      <IeltsFirstSection />
      <SubContainer className="toefl__table-section">
        <Text as="p" className="toefl__table-title">
          Postoje dve vrste IELTS ispita koje možete polagati - Academic ili
          General. Iako se polažu u različite svrhe, (General Module za
          emigriranje, a Academic Module za dalje akademske studije) postoje
          delovi koji su isti u oba modula, naime Listening i Speaking delovi
          testa su identični u General i Acedemic modulu. Što se tiče razlika,
          Reading deo je delimično lakši na General IELTS-u, dok je u Writing
          delu Academic testa prvi Writing zadatak dosta zahtevniji.
        </Text>
        <IeltsTableSection />
        <IeltsTableAndImageSection />
      </SubContainer>
      <Questions />
    </>
  );
};

export default Ielts;
