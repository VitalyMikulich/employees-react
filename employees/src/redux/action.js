import { LOGIN, DISPLAY_STYLE } from './types';

export function login(logInStatus, activeUser) {
  return {
    type: LOGIN,
    payload: {
      logInStatus,
      activeUser
    }
  }
}

export function displayStyle(display, tile, list) {
  return {
    type: DISPLAY_STYLE,
    payload: {
      display,
      tile,
      list
    }
  }
}