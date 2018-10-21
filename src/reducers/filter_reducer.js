import _ from 'lodash'
import { FILTER_WINS, CLEAR_FILTERS, TOGGLE_FAVORITE } from '../actions/filter_actions';

const defaultState = {
  wins: null,
  favorites: []
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case FILTER_WINS:
      return {
        ...state,
        wins: action.wins
      }
    case CLEAR_FILTERS:
      return {
        ...state,
        wins: null
      }
    case TOGGLE_FAVORITE:
      if (state.favorites.includes(action.id)) {
        const favs = state.favorites
        _.remove(favs, (f) => {
          return f === action.id
        })
        
        return {
          ...state,
          favorites: favs
        }
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.id]
        }
      }
    default:
      return state;
  }
}

