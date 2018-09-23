import _ from 'lodash'
import { FETCH_GAMES, FETCH_SCORES } from '../actions/game_actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_GAMES:
      return action.payload.data;
    case FETCH_SCORES:
      const games = state;
      const scores = action.payload.data;
      const newState = _.map(games, game => {
        let scoreGame = _.find(scores, s => { 
          return s.home.abbr == game.home.abbr 
        });
        return {...game, 
          //home: {...game.home, score: Math.floor(Math.random() * 42)},
          //away: {...game.away, score: Math.floor(Math.random() * 42)}
          home: {...game.home, score: scoreGame.home.score.T},
          away: {...game.away, score: scoreGame.away.score.T},
          qtr: scoreGame.qtr
        }
      })
      return newState;
    default:
      return state;
  }
}

