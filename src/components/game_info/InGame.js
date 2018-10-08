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
    default:
      return null
  }
}


const qtrHelper = (qtr) => {
  const num = qtr.toString();
  switch (num) {
    case "5":
      return "Overtime"
    default:
      return  ordinal(num) + " Qtr"
  }
}

const InGame = ({ game }) => (
  <div>
    <span className="clock">{qtrHelper(game.qtr)} - {game.clock}</span>
    <span className="down-and-distance">{ordinal(game.down)} & {game.togo}</span>
    <span className="yardline">{game.yl}</span>
  </div>
)

export default InGame;

