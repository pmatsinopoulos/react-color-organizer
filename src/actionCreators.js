import C from './constants';
// const uuidv4 = require('uuid/v4');
import { v4 } from 'uuid';

export const addColor = (title, color, rating) => {
  // console.log(`Returning action with rating: ${rating}`)
  return ({type: C.ADD_COLOR, id: v4(), color: color, title: title, timestamp: (new Date()).toUTCString(), rating: rating})
};
export const removeColor = id => ({type: C.REMOVE_COLOR, id: id});
export const rateColor = (id, rating) => ({type: C.RATE_COLOR, id: id, rating: rating});

