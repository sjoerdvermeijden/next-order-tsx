import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { restaurants } from "../../../data";
import { RestaurantsWrapper } from "./Style";

import Restaurant from "../Restaurant/Restaurant";

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--darkgray);
`;

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

function Restaurants({}: Props) {
  return (
    <RestaurantsWrapper>
      <ul className="restaurants">
        {restaurants.map((item) => {
          return (
            <>
              <li className="restaurants__item">
                <StyledLink href={`/restaurants/${item.id}`}>
                  <Restaurant
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    reviews={item.reviews}
                  />
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
