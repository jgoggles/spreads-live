import _ from 'lodash';
import React, { Component } from 'react';
import './Scores.css';

class TeamPick extends Component {
  render() {
    const { teamPick } = this.props;
    const { result } = teamPick.pick;

    let display;
    if (this.props.display) {
      display = "table-row";
    } else {
      display = "none";
    }

    let backgroundColor;
    if (result === "W") {
      backgroundColor = "#d4edda"
    } else if (result === "L") {
      backgroundColor = "#f8d7da"
    }

    return (
      <tr className="team-pick" style={{"display": display, "backgroundColor": backgroundColor}}>
        <td colSpan="2">{teamPick.user}</td>
        <td>{teamPick.pick.spread}</td>
      </tr>
    )
  }
}

export default TeamPick;

