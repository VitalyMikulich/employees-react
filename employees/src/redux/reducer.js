import { combineReducers } from 'redux';
import { LOGIN, DISPLAY_STYLE } from './types';

function logInReducer(state = {logInStatus: 'off', activeUser: 'off'}, action) {
  if(action.type === LOGIN) {
    return {...state, logInStatus: action.payload.logInStatus, activeUser: action.payload.activeUser}
  } 
  return state;
}

function displayReducer(state = { display: localStorage.getItem("display"), tile: localStorage.getItem('tile'), list: localStorage.getItem('list')} , action) {
  if(action.type === DISPLAY_STYLE) {
    return {...state, display: action.payload.display, tile: action.payload.tile, list: action.payload.list}
  }
  return state;
}

export const reducer = combineReducers({
  logIn: logInReducer,
  displayStyle: displayReducer,
})