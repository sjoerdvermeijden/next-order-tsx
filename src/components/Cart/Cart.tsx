import React from "react";

import { CartWrapper } from "./Style";

type Props = {};

function Cart({}: Props) {
  return (
    <>
      <CartWrapper>
        <div className="cart">
          <h3 className="cart__title">Winkelmand</h3>
          <span className="cart__total">Totaal: €0</span>
        </div>
      </CartWrapper>
    </>
  );
}

export default Cart;
