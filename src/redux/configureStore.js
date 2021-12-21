import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import gamesReducer from './gamesAPI';
import detailsReducer from './gameDetails'

const reducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;