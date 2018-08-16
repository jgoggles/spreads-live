import axios from 'axios';

export const FETCH_GAMES = 'fetch_games';

const ROOT_URL = 'http://www.nfl.com/liveupdate/scores/scores.json';

export function fetchGames() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_GAMES,
    payload: request
  };
}

