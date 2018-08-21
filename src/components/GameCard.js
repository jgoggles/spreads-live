import React, { Component } from 'react';

class GameCard extends Component {
  render() {
    const { game } = this.props;
    return (
      <div>
        <div className="away">
          <span>{game.away.full_name}</span>
          <span>{game.away.score}</span>
        </div>
        <div className="home">
          <span>{game.home.full_name}</span>
          <span>{game.home.score}</span>
        </div>
      </div>
    )
  }
}

export default GameCard;

