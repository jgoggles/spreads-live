import _ from 'lodash'
import PickHelper from '../lib/pick_helper';
import { FETCH_PICK_SETS, UPDATE_PICK_SETS } from '../actions/pick_set_actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PICK_SETS:
      return action.payload.data;
    case UPDATE_PICK_SETS:
      const games = action.payload;
      const pickSets = state;

      const newState = _.map(pickSets, ps => {
        let record = {win: 0, loss: 0, push: 0}
        const picks = _.map(ps.picks, pick => {
          const game = _.filter(games, game => {
            return game.id == pick.game_id
          })
          const pickHelper = new PickHelper();
          const result = pickHelper.result(pick, game[0]);
          if (result == 'W') {
            record = {...record, win: record.win + 1}
          } else if (result == 'L') {
            record = {...record, loss: record.loss + 1}
          } else {
            record = {...record, push: record.push + 1}
          }
          return {...pick, result: result}
        })
        return {...ps, picks: picks, record: record}
      })

      return newState;
    default:
      return state;
  }
}


