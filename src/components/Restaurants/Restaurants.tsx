import React, { useState } from "react";

import Image from "next/image";

import { restaurants } from "../../../data";
import { RestaurantsWrapper } from "./Style";

type Props = {};

function Restaurants({}: Props) {
  const [stores, setStores] = useState(restaurants);
  return (
    <div>
      <RestaurantsWrapper>
        <ul className="restaurants">
          {stores.map((item) => {
            return (
              <>
                <li className="restaurants__item">
                  <div className="restaurant">
                    <figure className="restaurant__image">
                      <img src={item.image.img} alt={item.image.alt} />
                    </figure>
                    <div className="restaurant__content">
                      <h3 className="restaurant__title">{item.name}</h3>
                      <p className="restaurant__description">
                        {item.description}
                      </p>
                      <span className="restaurant__reviews">
                        ({item.reviews.length} reviews)
                      </span>
                    </div>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </RestaurantsWrapper>
    </div>
  );
}

export default Restaurants;
