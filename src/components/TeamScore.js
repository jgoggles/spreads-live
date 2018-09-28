import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import TeamPick from './TeamPick';
import './Scores.css';

class TeamScore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPicks: false
    }

    this.togglePicks = this.togglePicks.bind(this);
  }

  renderPicks() {
    if (this.props.picks.length > 0) {
      return (
        _.map(this.props.picks, p => {
          return (
            <TeamPick key={p.pick.id} teamPick={p} display={this.state.showPicks} />
          )
        })
      )
    } else {
      let visible;
      if (this.state.showPicks) {
        visible = "visible"
      } else {
        visible = "collapse"
      }

      return (
        <tr style={{"visibility": visible}}>
          <td colSpan="3">{`No picks for the ${this.props.team.nickname}`}</td>
        </tr>
      )
    }
  }

  togglePicks() {
    this.setState({showPicks: !this.state.showPicks});
  }

  render() {
    const { team } = this.props;
    const scoreWidth = {width: '40px'};
    return (
      <tbody>
        <tr className="team-score" onClick={this.togglePicks}>
          <td className="logo">
            <img src={team.logo} />
          </td>
          <td>{team.full_name}</td>
          <td style={scoreWidth}>{team.score}</td>
        </tr>
        {this.renderPicks()}
      </tbody>
    )
  }
}

export default TeamScore;

