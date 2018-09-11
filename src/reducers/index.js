import { combineReducers } from 'redux';
import GameReducer from './game_reducer';
import PickSetReducer from './pick_set_reducer';

const rootReducer = combineReducers({
  games: GameReducer,
  pickSets: PickSetReducer
});

export default rootReducer;
