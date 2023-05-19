import styled from "styled-components";

export const RestaurantsWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  .restaurants {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    list-style: none;

    &__item {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  .restaurant {
    background: var(--lightgray);
    display: flex;

    &__image {
      display: block;

      &:not(:last-child) {
        margin-right: 5px;
      }

      img {
        width: 150px;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 2 / 1;
      }
    }

    &__content {
      padding: 10px;
    }

    &__title {
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }

    &__description {
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }

    &__reviews {
      font-size: 12px;
    }
  }
`;
