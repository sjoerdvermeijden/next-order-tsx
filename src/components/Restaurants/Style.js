import styled from "styled-components";

export const RestaurantsWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  .restaurants {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    list-style: none;

    &__item {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
`;
