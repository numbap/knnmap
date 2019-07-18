// Load Dependencies
import { createStore, combineReducers } from 'redux';
import mapsReducer from './../reducers/maps';

export default () => {
  const store = createStore(
    combineReducers({
      maps: mapsReducer,
    })
  );

  return store;
};