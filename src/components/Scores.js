import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGames } from '../actions/game_actions';
import GameCard from './GameCard';


class Scores extends Component {
  componentWillMount() {
    this.props.fetchGames();
  }

  renderGames() {
    return (
      _.map(this.props.games, game => {
        return (
          <GameCard game={game} />
        )
      })
    )
  }

  render() {
    return (
      <div className="four columns">
        <h3>Scores</h3>
        <div>
          {this.renderGames()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { games: state.games };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchGames}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores);
