import _ from 'lodash';
import React, { Component } from 'react';
import { Table, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchStats } from '../actions/stats_actions';
import PickHelper from '../lib/pick_helper';
import PoolRecord from './stats/PoolRecord';
import BasicStats from './stats/BasicStats';
import MostAction from './stats/MostAction';
import MostPicked from './stats/MostPicked';
import '../css/stats.css';

class Stats extends Component {
  componentWillMount() {
    this.props.fetchStats();
  }

  render() {
    const { stats } = this.props;
    if (!stats) {
      return <div>Loading...</div>
    }

    const pickHelper = new PickHelper();
    const totals = pickHelper.totals(this.props.pickSets);

    return (
      <div className="stats-container">
        <Col md={2}>
          <BasicStats homeVsAway={stats.home_vs_away} favVsDog={stats.favorite_vs_underdog} />
        </Col>
        <Col md={2}>
          <MostAction stats={stats.most_action} />
        </Col>
        <Col md={2}>
          <MostPicked stats={stats.most_picked} />
        </Col>
        <Col md={2}>
          <PoolRecord wins={totals.wins} losses={totals.losses} pushes={totals.pushes} />
        </Col>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    pickSets: state.pickSets,
    stats: state.stats
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchStats}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);

