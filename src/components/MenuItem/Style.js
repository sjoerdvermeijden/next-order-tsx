import styled from "styled-components";

export const MenuWrapper = styled.div`
  background: var(--lightgray);
  position: relative;

  .menu-item {
    &__container {
      padding: 5px;
    }

    &__add-button {
      border: 1px solid var(--darkgray);
      padding: 7px 10px;
      position: absolute;
      right: 0;
      top: 0;
    }

    &__title {
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
`;
