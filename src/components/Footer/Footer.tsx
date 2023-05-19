import { FooterWrapper } from "./Style";

import Wrap from "../Wrap/Wrap";

type Props = {};

function Footer({}: Props) {
  return (
    <div>
      <FooterWrapper>
        <Wrap>Github repo: hier | Sjoerd Vermeijden</Wrap>
      </FooterWrapper>
    </div>
  );
}

export default Footer;
