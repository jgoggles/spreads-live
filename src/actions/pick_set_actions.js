import axios from 'axios';
import parseUrl from 'url-parse';

export const FETCH_PICK_SETS = 'fetch_pick_sets';
export const UPDATE_PICK_SETS = 'update_pick_sets';

let API_URL;
if (process.env.NODE_ENV !== 'production') {
  API_URL = 'http://localhost:3001/api/v1/picks';
} else {
  API_URL = 'http://spreads.herokuapp.com/api/v1/picks';
}

export function fetchPickSets() {
  const pathname = parseUrl(window.location.href).pathname
  const poolId = pathname.split('/')[1];

  const requestConfig = {
    method: 'get',
    url: API_URL,
    params: {pool_id: poolId},
  }

  const request = axios.request(requestConfig);

  return {
    type: FETCH_PICK_SETS,
    payload: request
  };
}

export function updatePickSets(games) {
  return {
    type: UPDATE_PICK_SETS,
    payload: games
  };
}
