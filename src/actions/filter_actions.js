export const FILTER_WINS = 'wins';
export const CLEAR_FILTERS = 'clearFilters';
export const TOGGLE_FAVORITE = 'toggleFavorite';

export function filterWins(wins) {
  return {
    type: FILTER_WINS,
    wins
  }
}

export function clearFilters() {
  return {
    type: CLEAR_FILTERS,
    filter: 'default'
  }
}

export function toggleFavorite(id) {
  return {
    type: TOGGLE_FAVORITE,
    id
  }
}
