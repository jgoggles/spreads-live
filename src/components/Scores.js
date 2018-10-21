import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGames, fetchScores } from '../actions/game_actions';
import { updatePickSets } from '../actions/pick_set_actions';
import GameCard from './GameCard';


class Scores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastUpdated: _.now()
    }

    let interval;
    if (process.env.NODE_ENV == 'production') {
      interval = 60000;
    } else {
      interval = 30000;
    }
    this.interval = interval;
  }

  componentWillMount() {
    this.props.fetchGames()
      .then(() => {
        this.props.fetchScores();
      })
    this.autoFlush(this.interval);
  }

  autoFlush(interval) {
    setInterval(() => {
      this.props.fetchScores();
      this.setState({lastUpdated: _.now()});
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
        <h3>
          Scores&nbsp;
          <small style={{"fontSize":"12px"}}>Updated: {moment(this.state.lastUpdated).format('h:mm:ss a')}</small>
        </h3>
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
