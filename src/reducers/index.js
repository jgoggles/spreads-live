import { combineReducers } from 'redux';
import GamesReducer from './game_reducer';

const rootReducer = combineReducers({
  games: GamesReducer
});

export default rootReducer;
