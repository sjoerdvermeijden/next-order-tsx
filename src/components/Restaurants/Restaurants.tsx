import React, { useState } from "react";

import styled from "styled-components";

import { restaurants } from "../../../data";
import { RestaurantsWrapper } from "./Style";

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--darkgray);
`;

type Props = {};

function Restaurants({}: Props) {
  const [stores, setStores] = useState(restaurants);
  return (
    <RestaurantsWrapper>
      <ul className="restaurants">
        {restaurants.map((item) => {
          return (
            <>
              <li className="restaurants__item">
                <StyledLink href={`/restaurants/${item.id}`}>
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
                </StyledLink>
              </li>
            </>
          );
        })}
      </ul>
    </RestaurantsWrapper>
  );
}

export default Restaurants;
