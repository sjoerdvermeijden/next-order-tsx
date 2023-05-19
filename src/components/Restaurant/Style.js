import styled from "styled-components";

export const RestaurantWrapper = styled.div`
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

    &__reviews {
      display: flex;
      align-items: center;
    }

    &__rating {
      &:not(:last-child) {
        margin-right: 5px;
      }
    }

    &__description {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__reviews {
      font-size: 12px;
    }
  }

  .rating {
    display: flex;
    align-items: center;

    &__icon {
      &:not(:last-child) {
        margin-top: 2px;
        margin-right: 5px;
      }
    }
  }
`;
