import styled from "styled-components";
import { Container } from "src/ui";

const HeaderWrapper = styled.header`
  background: red;
  width: 100%;
  height: 6rem;
`;

const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <Container>Header</Container>
    </HeaderWrapper>
  );
};

export default Header;
