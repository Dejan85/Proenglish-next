import React from "react";

const Wrapper = "div";

const ExperienceModal = (props) => {
  const { children } = props;
  return <Wrapper className="experience-modal">{children}</Wrapper>;
};

export default ExperienceModal;
