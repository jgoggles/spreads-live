export const FILTER_WINS = 'wins';
export const CLEAR_FILTERS = 'clearFilters';

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
