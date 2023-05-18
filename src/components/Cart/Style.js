import styled from "styled-components";

export const CartWrapper = styled.div`
  width: 300px;
  border-left: 1px solid var(--darkgray);
  padding: 15px;

  .cart {
    display: flex;
    flex-direction: column;

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
`;
