import React from "react";
import {
  ExamsHeadingSection,
  ExamsTableSection,
  ExamsTableAndImageSection,
} from "src/components/ui";
import {
  headingContent,
  tableSectionContent,
  tableAndImageSectionContent,
} from "./constants";

import Questions from "./partials/Questions";

const Toefl: React.FC = (): JSX.Element => {
  return (
    <>
      <ExamsHeadingSection content={headingContent} />
      <ExamsTableSection content={tableSectionContent} />
      <ExamsTableAndImageSection content={tableAndImageSectionContent} />
      <Questions />
    </>
  );
};

export default Toefl;
