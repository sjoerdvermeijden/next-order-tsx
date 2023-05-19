import styled from "styled-components";

export const FilterWrapper = styled.div`
  padding: 10px;
  background: var(--lightgray);
  min-width: 250px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  .star-rating {
    &__list {
      list-style: none;
      display: none;
    }

    svg {
      transform: rotate(180deg);
    }

    &.is-open {
      svg {
        transform: rotate(0);
      }

      .star-rating {
        &__list {
          display: block;
        }

        &__title {
          display: flex;
          align-items: center;

          &:not(:last-child) {
            margin-bottom: 10px;
          }
        }
      }
    }

    &__title {
      display: flex;
      align-items: center;

      svg {
        margin-top: 1px;
      }
    }

    &__label {
      display: inline-block;
      margin-right: auto;
    }

    &__item {
      display: flex;

      &:hover,
      &:focus {
        cursor: pointer;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__checkbox {
      &:not(:last-child) {
        margin-right: 8px;
      }
    }

    &__label {
      &:focus,
      &:hover {
        cursor: pointer;
      }
    }
  }

  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
