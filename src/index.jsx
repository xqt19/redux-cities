// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import citiesReducer from './reducers/cities_reducer.js'
import selectedCityReducer from './reducers/selected_city_reducer.js'
// const reducers = combineReducers({
//   changeMe: (state = null, action) => state
// });
const reducers = combineReducers({
  cities: citiesReducer,
  selectedCity: selectedCityReducer
})

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
