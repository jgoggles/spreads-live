import React from 'react';
import '../Scores.css';

const ordinal = (n) => {
  switch (n) {
    case "1":
      return "1st"
    case "2":
      return "2nd"
    case "3":
      return "3rd"
    case "4":
      return "4th"
    default:
      return null
  }
}

const InGame = ({ game }) => (
  <div>
    <span className="clock">{ordinal(game.qtr)} Qtr - {game.clock}</span>
    <span className="down-and-distance">{ordinal(game.down)} & {game.togo}</span>
  </div>
)

export default InGame;

