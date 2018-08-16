import React, { Component } from 'react';

class GameCard extends Component {
  render() {
    const { game } = this.props;
    return (
      <div>
        <div className="away">
          <span>{game.away.abbr}</span>
          <span>{game.away.score.T}</span>
        </div>
      </div>
    )
  }
}

export default GameCard;

