import C from './constants';

const removeColor = (id) => ({
  type: C.REMOVE_COLOR,
  id
});

const rateColor = (id, rating) => ({
  type: C.RATE_COLOR,
  id,
  rating
});

const sortColors = sortBy => ({
  type: C.SORT_COLORS,
  sortBy
});

const addColor = (title, color) => ({
  type: C.ADD_COLOR,
  title,
  color
});

export {removeColor, rateColor, sortColors, addColor};
