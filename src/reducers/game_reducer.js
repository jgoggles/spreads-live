import { FETCH_GAMES } from '../actions/game_actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_GAMES:
      return action.payload.data;
    default:
      return state;
  }
}

