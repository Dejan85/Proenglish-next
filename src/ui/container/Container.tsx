import styled from "styled-components";
import { displayType, alignItemsType, justifyContentType } from "./types";

const Container = styled.main<{
  display?: displayType;
  justifyContent?: justifyContentType;
  alignItems?: alignItemsType;
}>`
  margin: 0 auto;
  max-width: 120rem;
  width: 100%;
  outline: 1px solid black;
  padding: 0 1rem;
  display: ${({ display }) => display && display};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: ${({ alignItems }) => alignItems && alignItems};
`;

export default Container;
