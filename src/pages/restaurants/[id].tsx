import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Layout from "../../components/Layout/Layout";
import MenuItem from "../../components/MenuItem/MenuItem";

import { useRouter } from "next/router";

import { restaurants } from "../../../data";

export const LayoutWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const RestaurantWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const MenuWrapper = styled.div`
  padding: 35px 15px;
  flex-grow: 1;

  .restaurant {
    &__name {
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  }

  ul {
    list-style: none;
    margin: -10px;
  }

  li {
    padding: 10px;
  }

  @media (min-width: 768px) {
    .menu-inner {
      max-width: 940px;
      margin: 0 auto;
    }
  }
`;

interface Restaurant {
  id: number;
  name: string;
  description: string;
  image: {
    img: string;
    alt: string;
  };
}

function RestaurantPage() {
  const [restaurantState, setRestaurantState] = useState<Restaurant | {}>({});

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      restaurants.map((item) => {
        if (item.id === Number(id)) {
          setRestaurantState(item);
        }
      });
    }
  }, [id]);

  return (
    <>
      <Layout>
        <LayoutWrapper>
          <MenuWrapper>
            <div className="menu-inner">
              <RestaurantWrapper>
                {restaurantState && (
                  <h1 className="restaurant-name">{restaurantState.name}</h1>
                )}
              </RestaurantWrapper>
              <div className="restaurant">
                <ul className="restaurant__menu">
                  {restaurantState.menu?.map((item) => {
                    return (
                      <li
                        className="restaurant__menu-item"
                        key={restaurantState.id}
                      >
                        <MenuItem
                          title={item.title}
                          description={item.description}
                          price={item.price}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </MenuWrapper>
        </LayoutWrapper>
      </Layout>
    </>
  );
}

export default RestaurantPage;
