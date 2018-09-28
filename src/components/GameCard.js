import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import './Scores.css';

class GameCard extends Component {
  teamPicks(teamId) {
    let picks = [];
    _.map(this.props.pickSets, ps => {
      return _.map(ps.picks, p => {
        if (p.team_id == teamId) {
          picks.push({user: ps.user, pick: p})
        }
      })
    })

    return (
      _.map(picks, p => {
        return (
          <tr key={p.pick.id}>
            <td colSpan="2">{p.user}</td>
            <td>{p.pick.spread}</td>
          </tr>
        )
      })
    )
  }

  render() {
    const { game } = this.props;
    const scoreWidth = {width: '40px'};
    return (
      <Table className="score" bordered condensed>
        <tbody>
          <tr className="away">
            <td className="logo">
              <img src={game.away.logo} />
            </td>
            <td>{game.away.full_name}</td>
            <td style={scoreWidth}>{game.away.score}</td>
          </tr>
          {this.teamPicks(game.away.id)}
          <tr className="home">
            <td className="logo">
              <img src={game.home.logo} />
            </td>
            <td>{game.home.full_name}</td>
            <td>{game.home.score}</td>
          </tr>
          {this.teamPicks(game.home.id)}
        </tbody>
      </Table>
    )
  }
}

function mapStateToProps(state) {
  return { 
    pickSets: state.pickSets
  };
}

export default connect(mapStateToProps, null)(GameCard);
