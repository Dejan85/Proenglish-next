import React from "react";
import { SubContainer, Text } from "src/components/ui";
import { toeflTableTitle } from "./constants";
import ToeflFirstSection from "./partials/ToeflFirstSection";
import ToeflTable from "./partials/ToeflTable";
import ToeflTableAndImageSection from "./partials/ToeflTableAndImageSection";

const Toefl: React.FC = (): JSX.Element => {
  return (
    <>
      <ToeflFirstSection />
      <SubContainer className="toefl__table-section">
        <Text as="p" className="toefl__table-title">
          {toeflTableTitle}
        </Text>
        <ToeflTable />
        <ToeflTableAndImageSection />
      </SubContainer>
    </>
  );
};

export default Toefl;
