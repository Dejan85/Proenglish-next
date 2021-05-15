import React, { useState } from "react";
import { NavigationProps } from "./types";
import List from "./partials/List";
import uniqid from "uniqid";
import { FontAwesomeIcon, ContentContainer } from "src/components/ui";

const Wrapper = "ul";
const className: string = "responsive-navigation";
const linkClassName: string = "responsive-navigation__link";
const responsiveActiveClassName: string = "responsive-navigation__active";

const ResponsiveNavigation = (props: NavigationProps): JSX.Element => {
  const { routerLink, linksText, linksPath } = props;
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const Link: any = routerLink;

  const dropNavHandler = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <Wrapper className={className}>
      {toggleNav && (
        <ContentContainer className="responsive-navigation__container">
          {linksText?.map((text: string, index: number) => (
            <List key={uniqid()} onClick={dropNavHandler}>
              <Link
                activeClassName={responsiveActiveClassName}
                href={linksPath[index]}
              >
                <a className={linkClassName}>{text}</a>
              </Link>
            </List>
          ))}
        </ContentContainer>
      )}

      <FontAwesomeIcon
        className="fas fa-bars responsive-navigation__icon"
        onClick={dropNavHandler}
      />
    </Wrapper>
  );
};

export default ResponsiveNavigation;
