import React from "react";

import { CartWrapper } from "./Style";

type Props = {};

function Cart({}: Props) {
  return (
    <>
      <CartWrapper>
        <div className="cart">
          <h3 className="cart__title">Winkelmand</h3>
          <ul className="cart__list"></ul>
          <span className="cart__total">Totaal: €0</span>
          <button className="cart__add-button">Voeg producten toe</button>
        </div>
      </CartWrapper>
    </>
  );
}

export default Cart;
