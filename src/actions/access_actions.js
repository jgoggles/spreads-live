import axios from 'axios';

export const SCOREBOARD_AVAILABLE = 'scoreboard_available';

let API_URL;
if (process.env.NODE_ENV !== 'production') {
  API_URL = 'http://localhost:3001/api/v1/access';
} else {
  API_URL = 'https://spreads.herokuapp.com/api/v1/access';
}

export function scoreboardAvailable() {
  const urlParams = new URLSearchParams(window.location.search);
  const poolId = urlParams.get('pool');
  const userId = urlParams.get('user');
  
  const requestConfig = {
    method: 'get',
    url: API_URL,
    params: {pool: poolId, user: userId},
  }

  const request = axios.request(requestConfig);

  return {
    type: SCOREBOARD_AVAILABLE,
    payload: request
  };
}
