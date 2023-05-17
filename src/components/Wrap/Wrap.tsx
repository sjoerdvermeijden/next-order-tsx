import { Wrapper } from "./Style";

type Props = {
  children: any;
};

function Wrap({ children }: Props) {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
}

export default Wrap;
