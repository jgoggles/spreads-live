import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import TeamPick from './TeamPick';
import TeamScore from './TeamScore';
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
    return picks;
  }

  render() {
    const { game } = this.props;
    const scoreWidth = {width: '40px'};
    return (
      <Table className="score" bordered condensed>
        <TeamScore team={game.away} picks={this.teamPicks(game.away.id)} />
        <TeamScore team={game.home} picks={this.teamPicks(game.home.id)} />
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
