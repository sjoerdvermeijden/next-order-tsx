import type { AppProps } from "next/app";

import { CartComponent } from "../context/CartContext";
import { FilterComponent } from "../context/FilterContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartComponent>
      <FilterComponent>
        <Component {...pageProps} />;
      </FilterComponent>
    </CartComponent>
  );
}
