
import React, { Component } from 'worker-react';
import FilterLink from '../filterLink';
import { VisibilityFilters } from '../../actions';
import './index.less';

export default function() {
  return (<div styleName="container">
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
    </FilterLink>
  </div>);
}

