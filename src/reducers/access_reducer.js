import _ from 'lodash'
import { SCOREBOARD_AVAILABLE } from '../actions/access_actions';

export default function(state = null, action) {
  switch (action.type) {
    case SCOREBOARD_AVAILABLE:
      const showPicks = action.payload.data.show_picks;
      return showPicks;
    default:
      return state;
  }
}

