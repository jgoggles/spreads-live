import React from 'react';
import '../Scores.css';

const ordinal = (n) => {
  const num = n.toString();
  switch (num) {
    case "1":
      return "1st Qtr"
    case "2":
      return "2nd Qtr"
    case "3":
      return "3rd Qtr"
    case "4":
      return "4th Qtr"
    case "5":
      return "Overtime"
    default:
      return null
  }
}

const InGame = ({ game }) => (
  <div>
    <span className="clock">{ordinal(game.qtr)} - {game.clock}</span>
    <span className="down-and-distance">{ordinal(game.down)} & {game.togo}</span>
    <span className="yardline">{game.yl}</span>
  </div>
)

export default InGame;

