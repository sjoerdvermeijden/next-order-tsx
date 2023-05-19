import React from "react";

import { BsFillStarFill } from "react-icons/bs";

type Props = {};

function Restaurant({}: Props) {
  return (
    <>
      <div className="restaurant">
        <figure className="restaurant__image">
          <img src={item.image.img} alt={item.image.alt} />
        </figure>
        <div className="restaurant__content">
          <h3 className="restaurant__title">{item.name}</h3>
          <p className="restaurant__description">{item.description}</p>
          <span className="restaurant__reviews">
            ({item.reviews.length} reviews)
          </span>
          <div className="restaurant__rating">
            <div className="rating">
              <div className="rating__icon">
                <BsFillStarFill color="orange" />
              </div>
              <div className="rating__rating">{ratingState.toFixed(1)}</div>
              <div className="rating__label">
                ({item.reviews.length} reviews)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurant;
