import React from "react";

import { BsFillStarFill } from "react-icons/bs";

type Props = {
  name: string;
  description: string;
  image: {
    img: string;
    alt: string;
  };
  reviews: number;
};

function Restaurant({ name, description, image, reviews }: Props) {
  return (
    <>
      <div className="restaurant">
        <figure className="restaurant__image">
          <img src={image.img} alt={image.alt} />
        </figure>
        <div className="restaurant__content">
          <h3 className="restaurant__title">{name}</h3>
          <p className="restaurant__description">{description}</p>
          <div className="restaurant__rating">
            <div className="rating">
              <div className="rating__icon">
                <BsFillStarFill color="orange" />
              </div>
              <div className="rating__rating"></div>
              <div className="rating__label"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurant;
