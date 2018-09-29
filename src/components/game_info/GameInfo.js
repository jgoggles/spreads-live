import React from 'react'
import Final from './Final'
import Pregame from './Pregame'
import InGame from './InGame'
import '../Scores.css';

class GameInfo extends React.Component {
  renderGameState() {
    const { game } = this.props;


    if (game.qtr === "Final") {
      return <Final />
    } else if (game.qtr === "Pregame" || !game.qtr) {
      return <Pregame date={game.date} />
    } else {
      return <InGame game={game} />
    }
  }

  render() {
    const { game } = this.props;

    return (
      <tbody>
        <tr className="game-info">
          <td colSpan="3">
            {this.renderGameState()}
          </td>
        </tr>
      </tbody>
    )
  }
}

export default GameInfo;

