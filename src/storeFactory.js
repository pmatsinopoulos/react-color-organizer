import {applyMiddleware, createStore, combineReducers} from 'redux';


const logger = store => next => action => {
  let result;
  console.groupCollapsed("dispatching", action.type);
  console.log("prev stat", store.getState());
  console.log("action", action);

  result = next(action);

  console.log("next state", store.getState());
  console.groupEnd();

  return result;
};

const saver = store => next => action => {
  let result = next(action);

  localStore['redux-store'] = JSON.stringify(store.getState());
  return result;
};

const storeFactory = (initialState={}) => {
  let middlewareStack = applyMiddleware(
    logger, saver // install 2 pieces of middleware
  );

  let storeInMiddleware = middlewareStack(createStore);

  return storeInMiddleware(
    combineReducers({colors, sort}),
    localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : initialState
    );
};

export default storeFactory;