import _ from 'lodash'

export default class PickHelper {
  result(pick, game) {
    let picked;
    let opponent;
    if (game.home.id == pick.team_id) {
      picked = game.home;
      opponent = game.away;
    } else {
      picked = game.away;
      opponent = game.home;
    }

    if (!picked.score) {
      return null
    } else if ((picked.score + pick.spread) - opponent.score > 0) {
      return 'W';
    } else if ((picked.score + pick.spread) - opponent.score == 0) {
      return 'P';
    } else {
      return 'L'
    }
  }
}
