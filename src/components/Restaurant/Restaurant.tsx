import React, { useState, useEffect } from "react";

import { RestaurantWrapper } from "./Style";

import { BsFillStarFill } from "react-icons/bs";

import { restaurants } from "../../../data";

type Review = {
  id: number;
  description: string;
  rating: number;
};

type Props = {
  id: number;
  name: string;
  description: string;
  image: {
    img: string;
    alt: string;
  };
  reviews: Array<Review>;
  rating: number;
};

function Restaurant({ id, name, description, image, reviews }: Props) {
  const [ratingState, setRatingState] = useState<number>(0);

  const ratingFunction = () => {
    const newArray = reviews.map((item) => {
      return item.rating;
    });

    const rating =
      newArray.reduce((partialSum, a) => partialSum + a, 0) / reviews.length;
    setRatingState(rating);

    restaurants.forEach((restaurant) => {
      if (restaurant.id === id) {
        restaurant.rating = rating;
      }
    });
  };

  useEffect(() => {
    ratingFunction();
  }, []);

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
                  <div className="rating__label">
                    ({reviews.length}) Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RestaurantWrapper>
    </>
  );
}

export default Restaurant;
