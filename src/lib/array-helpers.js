import C from '../constants';

const sortBy = (type, field) => {
  switch (type) {
    case "date" :
      return (a, b) => new Date(b[field]) - new Date(a[field]);
    case "string" :
      return (a, b) => (a[field] < b[field]) ? -1 : 1;
    default:
      return (a, b) => b[field] - a[field];
  }
};

export const sortFunction = sort => {
  switch(sort) {
    case C.SORTED_BY_TITLE:
      return sortBy("string", "title");
    case C.SORTED_BY_RATING:
      return sortBy("number", "rating");
    case C.SORTED_BY_DATE:
      return sortBy("date", "timestamp");
    default:
      return sortBy(null);
  }
};
