import React from "react";
import { VisibilityFilters } from "../actions";
import FilterLink from "./container/filterLink";

const Footer = () => {
  return (
    <p>
      Show : <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </p>
  );
};

export default Footer;
