import React, { MouseEvent, useContext } from "react";

import { CartContext } from "../../context/CartContext";

import { MenuWrapper } from "./Style";

type Props = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: {
    img: string;
    alt: string;
  };
};

function Menu({ id, title, description, price, image }: Props) {
  const [cartItems, setCartItems] = useContext(CartContext);

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();

    setCartItems([...cartItems, { id: cartItems.length + 1, title: "Test" }]);
  };

  return (
    <MenuWrapper>
      <div className="menu-item">
        <figure className="menu-item__image">
          <img src={image.img} alt={image.alt} />
        </figure>
        <div className="menu-item__container">
          <button
            className="menu-item__add-button"
            onClick={(e) => handleMouseEvent(e, id)}
          >
            +
          </button>
          <h3 className="menu-item__title">{title}</h3>
          <p className="menu-item__description">{description}</p>
          <span className="menu-item__price">€ {price}</span>
        </div>
      </div>
    </MenuWrapper>
  );
}

export default Menu;
