import { BlockWrapper } from "./Style";

type Props = {
  children: JSX.Element;
};

function Wrap({ children }: Props) {
  return (
    <>
      <BlockWrapper>{children}</BlockWrapper>
    </>
  );
}

export default Wrap;
