import React from "react";

import { MenuWrapper } from "./Style";

type Props = {
  title: string;
  description: string;
};

function Menu({ title, description }: Props) {
  return (
    <MenuWrapper>
      <div className="menu-item">
        <figure className="menu-item__image"></figure>
        <div className="menu-item__container">
          <button className="menu-item__add-button">+</button>
          <h3 className="menu-item__title">{title}</h3>
          <p className="menu-item__description">{description}</p>
        </div>
      </div>
    </MenuWrapper>
  );
}

export default Menu;
