import React from "react";

import { RestaurantWrapper } from "./Style";

import { BsFillStarFill } from "react-icons/bs";

type Review = {
  id: number;
  description: string;
  rating: number;
};

type Props = {
  name: string;
  description: string;
  image: {
    img: string;
    alt: string;
  };
  reviews: Array<Review>;
};

function Restaurant({ name, description, image, reviews }: Props) {
  return (
    <>
      <RestaurantWrapper>
        <div className="restaurant">
          <figure className="restaurant__image">
            <img src={image.img} alt={image.alt} />
          </figure>
          <div className="restaurant__content">
            <h3 className="restaurant__title">{name}</h3>
            <p className="restaurant__description">{description}</p>
            <div className="restaurant__reviews">
              <div className="restaurant__rating">
                <div className="rating">
                  <div className="rating__icon">
                    <BsFillStarFill color="orange" />
                  </div>
                  <div className="rating__rating"></div>
                  <div className="rating__label"></div>
                </div>
              </div>
              <div className="restaurant__total-reviews">
                ({reviews.length}) Reviews
              </div>
            </div>
          </div>
        </div>
      </RestaurantWrapper>
    </>
  );
}

export default Restaurant;
