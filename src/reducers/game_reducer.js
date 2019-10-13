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
            if (s.home.abbr == "LA") {
              return "LAR" == game.home.abbr;
            } else {
              return s.home.abbr == game.home.abbr;
            }
          });
        } else {
          scoreGame = {
            home: {
              score: {
                T: Math.floor(Math.random() * 42)
              }
            },
            away: {
              score: {
                T: Math.floor(Math.random() * 42)
              }
            },
            qtr: null,
            clock: null,
            down: null,
            togo: null,
            posteam: null,
            yl: null
          }
        }

        return {...game, 
          home: {...game.home, score: scoreGame.home.score.T},
          away: {...game.away, score: scoreGame.away.score.T},
          qtr: scoreGame.qtr,
          clock: scoreGame.clock,
          down: scoreGame.down,
          togo: scoreGame.togo,
          posteam: scoreGame.posteam,
          yl: scoreGame.yl
        }
      })
      return newState;
    default:
      return state;
  }
}

