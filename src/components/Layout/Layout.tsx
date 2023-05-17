import { GlobalStyle } from "../Styles/GlobalStyle";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
