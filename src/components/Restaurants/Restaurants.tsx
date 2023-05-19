import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { restaurants } from "../../../data";
import { RestaurantsWrapper } from "./Style";

import Restaurant from "../Restaurant/Restaurant";

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--darkgray);
`;

type Props = {};

function Restaurants({}: Props) {
  return (
    <RestaurantsWrapper>
      <ul className="restaurants">
        {restaurants.map((item) => {
          return (
            <>
              <li className="restaurants__item">
                <StyledLink href={`/restaurants/${item.id}`}>
                  <Restaurant />
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
