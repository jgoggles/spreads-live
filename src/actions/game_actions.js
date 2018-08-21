import axios from 'axios';

export const FETCH_GAMES = 'fetch_games';
export const FETCH_SCORES = 'fetch_scores';

const SCORES_URL = 'http://www.nfl.com/liveupdate/scores/scores.json';
const API_URL = 'http://localhost:3001/api/v1/games';

export function fetchGames() {
  const request = axios.get(`${API_URL}`);

  return {
    type: FETCH_GAMES,
    payload: request
  };
}

export function fetchScores() {
  //const request = axios.get(`${SCORES_URL}`);
  const request = {}

  return {
    type: FETCH_SCORES,
    payload: request
  };
}

