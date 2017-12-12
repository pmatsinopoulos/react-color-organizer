import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import C from "./constants";
import {color} from "./reducers";
import {colors} from "./reducers";
import {sort} from "./reducers";
import {createStore, combineReducers} from 'redux';
import {addColor, rateColor} from './actionCreators';
import {compose} from 'redux';

const uuidv1 = require('uuid/v1');

const initialState = {
    colors: [
        {
            title: "Black",
            color: "#000000",
            rating: 1
        },
        {
            title: "Red",
            color: "#FF0000",
            rating: 2
        },
        {
            title: "Green",
            color: "#00FF00",
            rating: 3
        },
        {
            title: "Blue",
            color: "#0000FF",
            rating: 4
        },
    ],
    sort: C.SORTED_BY_DATE
};

const store = createStore(combineReducers({colors, sort}),
  localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {}
  );
console.log(store.getState());

// Let's create some subscribers to the store
const unsubscribeRef = store.subscribe(() => localStorage['redux-store'] = JSON.stringify(store.getState()));

initialState.colors.forEach(c => store.dispatch(addColor(c.title, c.color, c.rating)));

store.dispatch(addColor('Almost White', '#F1F1F1', 1));
console.log(store.getState());

// change the rating of the Red color to 16:
const colorId = store.getState().colors.filter(c => c.title === "Red")[0].id;
console.log(`Changing rating of color with id: ${colorId}`);

store.dispatch(rateColor(colorId, 16));
console.log(store.getState());

console.log("Printing all colors >");
// console.log(store.getState().colors.map(c => c.title).join(', '));
const print = compose(
  joinedTitles => console.log(joinedTitles),
  titles => titles.join(', '),
  map => map(c => c.title),
  colors => colors.map.bind(colors),
  state => state.colors
);
print(store.getState());

// const action = {
//     type: C.ADD_COLOR,
//     id: uuidv1(),
//     color: "#0000FF",
//     title: "Big Blue",
//     timestamp: (new Date()).toUTCString()
// };
//
// const firstColorId = action.id;
// console.log(`First Color Id: ${firstColorId}`);

// let currentState = color({}, action);
// console.log(currentState);
//
// action.type = C.RATE_COLOR;
// action.rating = 4;
//
// currentState = color(currentState, action);
// console.log(currentState);

// ADD first color
// let currentColors = colors([], action);
// console.log(currentColors);

// ADD second color
// action.id = uuidv1();
// action.color = "#FF00FF";
// action.title = "Purple";
// action.timestamp = (new Date()).toUTCString();

// currentColors = colors(currentColors, action);
// console.log(currentColors);

// RATE last color
// action.type = C.RATE_COLOR;
// action.rating = 4;

// currentColors = colors(currentColors, action);
// console.log(currentColors);

// Remove first color
// action.type = C.REMOVE_COLOR;
// action.id = firstColorId;

// currentColors = colors(currentColors, action);
// console.log(currentColors);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}




export default App;
