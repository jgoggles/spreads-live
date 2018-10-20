import { combineReducers } from 'redux';
import GameReducer from './game_reducer';
import PickSetReducer from './pick_set_reducer';
import AccessReducer from './access_reducer';
import StatsReducer from './stats_reducer';
import FilterReducer from './filter_reducer';

const rootReducer = combineReducers({
  games: GameReducer,
  pickSets: PickSetReducer,
  access: AccessReducer,
  stats: StatsReducer,
  filter: FilterReducer
});

export default rootReducer;
