import React from "react";
import { NavigationProps } from "./types";
import List from "./partials/List";
import uniqid from "uniqid";
import ResponsiveNavigation from "./ResponsiveNav";
import ActiveLink from "./partials/ActiveLink";

const Wrapper = "ul";
const className: string = "navigation";

const Navigation = (props: NavigationProps): JSX.Element => {
  const { linksText, linksPath } = props;

  return (
    <Wrapper className={className}>
      {linksText?.map((text: string, index: number) => (
        <List key={uniqid()}>
          <ActiveLink href={linksPath[index]}>{text}</ActiveLink>
        </List>
      ))}
    </Wrapper>
  );
};

Navigation.ResponsiveNavigation = ResponsiveNavigation;

export default Navigation;
