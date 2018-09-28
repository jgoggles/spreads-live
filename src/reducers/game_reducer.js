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
        let scoreGame;
        if (process.env.NODE_ENV == 'production') {
          scoreGame = _.find(scores, s => { 
            return s.home.abbr == game.home.abbr;
          });
        }
        let homeScore;
        let awayScore;
        if (process.env.NODE_ENV !== 'production') {
          homeScore = Math.floor(Math.random() * 42);
          awayScore = Math.floor(Math.random() * 42);
        } else {
          homeScore = scoreGame.home.score.T;
          awayScore = scoreGame.away.score.T;
        }
        return {...game, 
          home: {...game.home, score: homeScore},
          away: {...game.away, score: awayScore},
        }
      })
      return newState;
    default:
      return state;
  }
}

