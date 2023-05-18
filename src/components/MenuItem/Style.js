import styled from "styled-components";

export const MenuWrapper = styled.div`
  background: var(--lightgray);
  position: relative;

  .menu-item {
    display: flex;

    &__image {
      img {
        height: 100px;
        width: 150px;
      }
    }

    &__container {
      padding: 10px;
    }

    &__add-button {
      border: 1px solid var(--darkgray);
      padding: 7px 10px;
      position: absolute;
      right: 0;
      top: 0;

      &:hover,
      &:focus {
        cursor: pointer;
      }
    }

    &__description,
    &__title {
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
`;
