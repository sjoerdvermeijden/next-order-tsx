import { FooterWrapper } from "./Style";

import styled from "styled-components";

import Wrap from "../Wrap/Wrap";

export const StyledLink = styled.a`
  color: white;
  font-weight: bold;
`;

type Props = {};

function Footer({}: Props) {
  return (
    <div>
      <FooterWrapper>
        <Wrap>
          <p>
            Github repo:{" "}
            <StyledLink
              href="https://github.com/sjoerdvermeijden/next-order-tsx"
              target="_blank"
              rel="noreferrer"
            >
              hier
            </StyledLink>{" "}
            | Sjoerd Vermeijden
          </p>
        </Wrap>
      </FooterWrapper>
    </div>
  );
}

export default Footer;
