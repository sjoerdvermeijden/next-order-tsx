import type { AppProps } from "next/app";

import { CartComponent } from "../context/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartComponent>
      <Component {...pageProps} />;
    </CartComponent>
  );
}
