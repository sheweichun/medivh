

import { combineReducers } from 'redux';
import todos from '../container/addToDo/reducer';
import visibilityFilter from '../container/filterLink/reducer';

export default combineReducers({
  todos,
  visibilityFilter,
});
