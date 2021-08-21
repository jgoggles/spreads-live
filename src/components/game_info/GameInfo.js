import React from "react";
import Final from "./Final";
import Halftime from "./Halftime";
import Pregame from "./Pregame";
import InGame from "./InGame";
import "../Scores.css";

class GameInfo extends React.Component {
  renderGameState() {
    const { game } = this.props;

    if (["post", "final overtime"].includes(game.state)) {
      return <Final />;
    } else if (game.state === "half") {
      return <Halftime />;
    } else if (game.state === "pre" || !game.state) {
      return <Pregame date={game.date} />;
    } else {
      return <InGame game={game} />;
    }
  }

  render() {
    const { game } = this.props;

    return (
      <tbody>
        <tr className="game-info">
          <td colSpan="3">{this.renderGameState()}</td>
        </tr>
      </tbody>
    );
  }
}

export default GameInfo;
