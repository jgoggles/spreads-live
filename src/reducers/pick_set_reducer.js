import _ from 'lodash'
import { FETCH_PICK_SETS, UPDATE_PICK_SETS } from '../actions/pick_set_actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PICK_SETS:
      return action.payload.data;
    case UPDATE_PICK_SETS:
      const games = action.payload;
      const pickSets = state;

      const huh = _.map(pickSets, ps => {
        const picks = _.map(ps.picks, pick => {
          const game = _.filter(games, game => {
            game.id == pick.game_id
          })
          return {...pick, result: 'win'}
        })
        return {...ps, picks: picks}
      })

      return huh;
    default:
      return state;
  }
}


