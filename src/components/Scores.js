import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGames, fetchScores } from '../actions/game_actions';
import GameCard from './GameCard';


class Scores extends Component {
  constructor(props) {
    super(props);
    this.autoFlush(5000);
  }

  componentWillMount() {
    this.props.fetchGames();
  }

  autoFlush(interval) {
    return this.flushInterval = setInterval(() => {
      return this.props.fetchScores();
    },
    interval);
  }

  renderGames() {
    return (
      _.map(this.props.games, game => {
        return (
          <GameCard key={game.id} game={game} />
        )
      })
    )
  }

  render() {
    return (
      <div>
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
  return bindActionCreators({fetchGames, fetchScores}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores);
