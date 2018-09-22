import axios from 'axios';

export const FETCH_PICK_SETS = 'fetch_pick_sets';
export const UPDATE_PICK_SETS = 'update_pick_sets';

let API_URL;
if (process.env.NODE_ENV !== 'production') {
  API_URL = 'http://localhost:3001/api/v1/picks';
} else {
  API_URL = 'https://spreads.herokuapp.com/api/v1/picks';
}

export function fetchPickSets() {
  const urlParams = new URLSearchParams(window.location.search);
  const poolId = urlParams.get('pool_id');
  
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
