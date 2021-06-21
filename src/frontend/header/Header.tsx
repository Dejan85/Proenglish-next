import styled from "styled-components";
import { Container } from "src/ui";
import Image from "next/image";
import Logo from "public/images/logo.png";

const HeaderWrapper = styled.header`
  display: flex;
  position: sticky;
  width: 100%;
  height: 6rem;
  box-shadow: 0 0 10px rgb(0 0 0 / 13%);
  background: white;
`;

const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <Container
        as="div"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image src={Logo} alt="proenglish-logo" />
        <nav>navigacija</nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
