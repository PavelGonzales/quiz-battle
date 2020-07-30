import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

const initialState = {
  players: {}
}
function reducer(state = initialState, action) {
  if (action.type === 'ADD_PLAYER') {
    return {
      ...state,
      players: {
        ...state.players,
        player: {
          ...action.payload,
        }
      }
    }
  }
  if (action.type === 'ADD_RIVAL') {
    return {
      ...state,
      players: {
        ...state.players,
        rival: {
          ...action.payload,
        }
      }
    }
  }
  if (action.type === 'SET_RIGHT_ANSWER_TO_PLAYER') {
    return {
      ...state,
      players: {
        ...state.players,
        player: {
          ...state.players.player,
          rightAnswers: action.payload.count,
        }
      }
    }
  }
  if (action.type === 'SET_RIGHT_ANSWER_TO_RIVAL') {
    return {
      ...state,
      players: {
        ...state.players,
        rival: {
          ...state.players.rival,
          rightAnswers: action.payload.count,
        }
      }
    }
  }
  return state;
}
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
