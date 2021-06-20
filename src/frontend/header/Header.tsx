import styled from "styled-components";
import { Container } from "src/ui";

const HeaderWrapper = styled.header`
  display: flex;
  position: sticky;
  background: red;
  width: 100%;
  height: 6rem;
  box-shadow: 0 0 10px rgb(0 0 0 / 13%);
  background: white;
`;

const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <Container as="div">Header</Container>
    </HeaderWrapper>
  );
};

export default Header;
