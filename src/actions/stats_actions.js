import axios from 'axios';

export const FETCH_STATS = 'fetch_stats';

let API_URL;
if (process.env.NODE_ENV !== 'production') {
  API_URL = 'http://localhost:3001/api/v1/stats';
} else {
  API_URL = 'https://spreads.herokuapp.com/api/v1/stats';
}

export function fetchStats() {
  const urlParams = new URLSearchParams(window.location.search);
  const poolId = urlParams.get('pool');
  
  const requestConfig = {
    method: 'get',
    url: API_URL,
    params: {pool: poolId},
  }

  const request = axios.request(requestConfig);

  return {
    type: FETCH_STATS,
    payload: request
  };
}
