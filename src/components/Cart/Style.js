import styled from "styled-components";

export const CartWrapper = styled.div`
  width: 300px;
  border-left: 1px solid var(--darkgray);
  padding: 15px;

  .cart {
    display: flex;
    flex-direction: column;

    &__list {
      list-style: none;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__item {
      border-top: 1px solid #9f9f9f;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__title {
      text-align: center;
      padding: 15px 0;
      font-weight: 100;
    }

    &__total {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__add-button {
      padding: 10px;
      background: red;
      border-width: 0;
      border-radius: 3px;
      color: white;
      font-weight: bold;
      font-size: 12px;
    }
  }

  .cart-item {
    display: flex;
    flex-direction: column;
    padding: 15px 0 5px;
    justify-content: flex-end;

    &__count {
      &:not(:last-child) {
        margin-right: 5px;
      }
    }

    &__label {
      display: flex;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__name {
      flex-grow: 1;
    }

    &__buttons {
      display: flex;
      justify-content: flex-end;

      button {
        padding: 5px;
      }

      .cart-item__subtract {
        &:not(:last-child) {
          margin-right: 5px;
        }
      }
    }
  }
`;
