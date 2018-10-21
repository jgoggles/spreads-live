import axios from 'axios';

export const FETCH_GAMES = 'fetch_games';
export const FETCH_SCORES = 'fetch_scores';

const SCORES_URL = 'http://www.nfl.com/liveupdate/scores/scores.json';
let API_URL;
if (process.env.NODE_ENV !== 'production') {
  API_URL = 'http://localhost:3001/api/v1/games';
} else {
  API_URL = 'https://spreads.herokuapp.com/api/v1/games';
}

export function fetchGames() {
  const request = axios.get(`${API_URL}`);

  return {
    type: FETCH_GAMES,
    payload: request
  };
}

export function fetchScores() {
  let request;
  if (process.env.NODE_ENV == 'production') {
    request = axios.get(`${SCORES_URL}`);
  } else {
    request = {}
  }

  return {
    type: FETCH_SCORES,
    payload: request
  };
}

