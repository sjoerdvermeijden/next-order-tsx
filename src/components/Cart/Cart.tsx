import React, { MouseEvent, useContext } from "react";

import { CartWrapper } from "./Style";

import { CartContext } from "../../context/CartContext";

type Props = {};

function Cart({}: Props) {
  const [cartItems, setCartItems] = useContext(CartContext);

  // The add button on individual cart items
  const addFunction = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    const newArray = cartItems.map((item) => {
      if (item.id === id) {
        console.log("test");
      }
      return item;
    });

    setCartItems(newArray);
  };

  return (
    <>
      <CartWrapper>
        <div className="cart">
          <h3 className="cart__title">Winkelmand</h3>
          <ul className="cart__list">
            {cartItems?.map((item) => {
              return (
                <li key={item.id} className="cart__item">
                  <div className="cart-item">
                    <div className="cart-item__label">
                      <span className="cart-item__count">(0)</span>
                      <p className="cart-item__name">Pizza Quatro Stagoni</p>
                      <span className="cart-item__price">€ 16.99</span>
                    </div>
                    <div className="cart-item__buttons">
                      <button
                        className="cart-item__subtract"
                        onClick={(e) => subtractFunction(e)}
                      >
                        -
                      </button>
                      <button
                        className="cart-item__add"
                        onClick={(e) => addFunction(e, item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <span className="cart__total">Totaal: €0</span>
          <button className="cart__add-button">Voeg producten toe</button>
        </div>
      </CartWrapper>
    </>
  );
}

export default Cart;
