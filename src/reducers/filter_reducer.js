import _ from 'lodash'
import { FILTER_WINS, CLEAR_FILTERS } from '../actions/filter_actions';

const defaultState = {
  wins: null
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case FILTER_WINS:
      return {
        ...state,
        wins: action.wins
      }
    case CLEAR_FILTERS:
      return defaultState;
    default:
      return state;
  }
}

