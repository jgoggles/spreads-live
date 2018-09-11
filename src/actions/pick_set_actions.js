import axios from 'axios';

export const FETCH_PICK_SETS = 'fetch_pick_sets';
export const UPDATE_PICK_SETS = 'update_pick_sets';

const API_URL = 'http://localhost:3001/api/v1/picks';

export function fetchPickSets() {
  const request = axios.get(`${API_URL}`);

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
