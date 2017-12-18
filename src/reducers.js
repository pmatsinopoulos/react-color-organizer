import C from './constants';
import {v4} from 'uuid';

// Takes as input the state of a color and an action, e.g. ADD_COLOR.
// Returns back a new state, that represents a color.
const color = (state={}, action) => {
  switch(action.type) {
    case C.ADD_COLOR:
      return {
        id: v4(),
        title: action.title,
        color: action.color,
        timestamp: (new Date()).toUTCString(),
        rating: 0
      };
    case C.RATE_COLOR:
      return (state.id !== action.id) ? state :   {
        ...state,
        rating: action.rating
      };
    default:
      return state;
  }
};

const colors = (state=[], action) => {
  return []
};

const sort = (state=C.SORTED_BY_DATE, action) => {
  return '';
};

export {color};
