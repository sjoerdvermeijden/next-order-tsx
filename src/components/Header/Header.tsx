import { HeaderWrapper } from "./Style";

import styled from "styled-components";

import Wrap from "../Wrap/Wrap";

export const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: var(--darkgray);
`;

type Props = {};

function Header({}: Props) {
  return (
    <>
      <HeaderWrapper>
        <Wrap>
          <div className="main-inner">
            <StyledLink href="/">
              <h1>Header</h1>
            </StyledLink>
          </div>
        </Wrap>
      </HeaderWrapper>
    </>
  );
}

export default Header;
