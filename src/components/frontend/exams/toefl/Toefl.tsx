import React from "react";
import {
  SubContainer,
  Text,
  ExamsHeadingSection,
  ExamsTableSection,
} from "src/components/ui";
import {
  toeflTableTitle,
  headingContent,
  tableSectionContent,
} from "./constants";
import ToeflFirstSection from "./partials/ToeflFirstSection";
import ToeflTable from "./partials/ToeflTable";
import ToeflTableAndImageSection from "./partials/ToeflTableAndImageSection";
import Questions from "./partials/Questions";

const Toefl: React.FC = (): JSX.Element => {
  return (
    <>
      <ExamsHeadingSection content={headingContent} />
      <ExamsTableSection content={tableSectionContent} />
      <Questions />
    </>
  );
};

export default Toefl;
