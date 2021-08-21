import _ from "lodash";
import { FETCH_GAMES, FETCH_SCORES } from "../actions/game_actions";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_GAMES:
      return action.payload.data;
    case FETCH_SCORES:
      const games = state;
      const scores = action.payload.data.events;
      const newState = _.map(games, (game) => {
        let scoreGame;

        if (process.env.NODE_ENV == "production") {
          scoreGame = _.find(scores, (s) => {
            return (
              s.competitions[0].competitors[0].team.abbreviation ==
              game.home.abbr
            );
          });
        } else {
          scoreGame = {
            competitions: [
              {
                competitors: [
                  { id: "1", score: Math.floor(Math.random() * 42) },
                  { id: "2", score: Math.floor(Math.random() * 42) },
                ],
                situation: {},
              },
            ],
            status: { type: { shortDetail: null, state: "in" } },
          };
        }

        return {
          ...game,
          home: {
            ...game.home,
            remoteId: scoreGame.competitions[0].competitors[0].id,
            score: scoreGame.competitions[0].competitors[0].score,
          },
          away: {
            ...game.away,
            remoteId: scoreGame.competitions[0].competitors[1].id,
            score: scoreGame.competitions[0].competitors[1].score,
          },
          clock: scoreGame.status.type.shortDetail,
          state: scoreGame.status.type.state,
          situation: scoreGame.competitions[0].situation,
        };
      });
      return newState;
    default:
      return state;
  }
}
