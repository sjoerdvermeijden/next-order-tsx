import React, { MouseEvent } from "react";

import { MenuWrapper } from "./Style";

type Props = {
  title: string;
  description: string;
  price: number;
};

const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();

  console.log("test");
};

function Menu({ title, description, price }: Props) {
  return (
    <MenuWrapper>
      <div className="menu-item">
        <figure className="menu-item__image"></figure>
        <div className="menu-item__container">
          <button
            className="menu-item__add-button"
            onClick={(e) => handleMouseEvent(e)}
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