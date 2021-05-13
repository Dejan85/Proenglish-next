import React from "react";
import Box from "./Box";
import { iconsClassName, boxesText } from "./constants";
import uniqid from "uniqid";

const Wrapper = "div";
const className: string = "home-icon-boxes";

const generateBoxes = (): JSX.Element[] =>
  iconsClassName.map((icon: string, i: number) => (
    <Box
      key={uniqid()}
      iconClassName={icon}
      text={boxesText[i]}
      customClassName={`box${i}`}
    />
  ));

const boxes = generateBoxes();

function HomeIconsBoxes(): JSX.Element {
  return <Wrapper className={className}>{boxes}</Wrapper>;
}

export default HomeIconsBoxes;
