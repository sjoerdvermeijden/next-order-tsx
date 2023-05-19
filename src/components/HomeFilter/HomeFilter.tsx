import React, { MouseEvent } from "react";

import { FilterContext } from "../../context/FilterContext";
import { FilterWrapper } from "./Style";

import { BsChevronUp } from "react-icons/bs";

type Props = {};

function HomeFilter({}: Props) {
  const openToggle = (e: MouseEvent<HTMLElement>) => {
    const title = e.target as Element;
    const list = title.parentNode as Element;

    list.classList.toggle("is-open");
  };

  return (
    <FilterWrapper>
      <div className="star-rating">
        <h3 className="star-rating__title" onClick={(e) => openToggle(e)}>
          <span className="star-rating__label">Stars</span>
          <BsChevronUp style={{ marginTop: 2 }} size="12px" />
        </h3>
        <ul className="star-rating__list" onChange={(e) => filterFunction(e)}>
          <li className="star-rating__item">
            <input type="checkbox" className="star-rating__checkbox" id="5" />
            <label className="star-rating__label" htmlFor="5">
              5
            </label>
          </li>
          <li className="star-rating__item">
            <input type="checkbox" className="star-rating__checkbox" id="4" />
            <label className="star-rating__label" htmlFor="4">
              4
            </label>
          </li>
          <li className="star-rating__item">
            <input type="checkbox" className="star-rating__checkbox" id="3" />
            <label className="star-rating__label" htmlFor="3">
              3
            </label>
          </li>
          <li className="star-rating__item">
            <input type="checkbox" className="star-rating__checkbox" id="2" />
            <label className="star-rating__label" htmlFor="2">
              2
            </label>
          </li>
          <li className="star-rating__item">
            <input type="checkbox" className="star-rating__checkbox" id="1" />
            <label className="star-rating__label" htmlFor="1">
              1
            </label>
          </li>
        </ul>
      </div>
    </FilterWrapper>
  );
}

export default HomeFilter;
