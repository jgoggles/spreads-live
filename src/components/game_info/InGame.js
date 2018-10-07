import React from 'react';
import '../Scores.css';

const ordinal = (n) => {
  const num = n.toString();
  switch (num) {
    case "1":
      return "1st"
    case "2":
      return "2nd"
    case "3":
      return "3rd"
    case "4":
      return "4th"
    case "5":
      return "OT"
    default:
      return null
  }
}

const InGame = ({ game }) => (
  <div>
    <span className="clock">{ordinal(game.qtr)} Qtr - {game.clock}</span>
    <span className="down-and-distance">{ordinal(game.down)} & {game.togo}</span>
    <span className="yardline">{game.yl}</span>
  </div>
)

export default InGame;

