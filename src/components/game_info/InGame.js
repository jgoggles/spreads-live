import React from "react";
import "../Scores.css";

const InGame = ({ game }) => {
  return (
    <div>
      <span className="clock">{game.clock}</span>
      <span className="down-and-distance">
        {game.situation.downDistanceText}
      </span>
    </div>
  );
};

export default InGame;
