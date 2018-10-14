import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGames, fetchScores } from '../actions/game_actions';
import { updatePickSets } from '../actions/pick_set_actions';
import GameCard from './GameCard';


class Scores extends Component {
  constructor(props) {
    super(props);
    let interval;
    if (process.env.NODE_ENV == 'production') {
      interval = 60000;
    } else {
      interval = 3000;
    }
    this.autoFlush(interval);
  }

  componentWillMount() {
    this.props.fetchGames()
      .then(() => {
        this.props.fetchScores();
      })
  }

  autoFlush(interval) {
    setInterval(() => {
      this.props.fetchScores();
    },
    interval);
  }

  componentDidUpdate() {
    this.props.updatePickSets(this.props.games);
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
  return { 
    games: state.games
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchGames, 
    fetchScores,
    updatePickSets
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores);
