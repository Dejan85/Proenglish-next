import React from "react";
import Link from "next/link";
import { SubContainer, Logo, Navigation, HeaderUi } from "src/components/ui";
import { linksText, linksPath } from "./constants";

const MemoizedUi: JSX.Element = (
  <HeaderUi>
    <SubContainer className="position-relative">
      <Logo />
      <Navigation
        routerLink={Link}
        linksText={linksText}
        linksPath={linksPath}
      />
    </SubContainer>
    <Navigation.ResponsiveNavigation
      routerLink={Link}
      linksText={linksText}
      linksPath={linksPath}
    />
  </HeaderUi>
);

const Header = (): JSX.Element => MemoizedUi;

export default Header;
