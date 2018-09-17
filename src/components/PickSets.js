import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPickSets } from '../actions/pick_set_actions';
import PickCard from './PickCard';
import { Table } from 'react-bootstrap';

class PickSets extends Component {
  componentWillMount() {
    this.props.fetchPickSets();
  }

  renderPicks() {
    return (
      _.map(this.props.pickSets, pickSet => {
        return (
          <PickCard key={pickSet.id} pickSet={pickSet} />
        )
      })
    )
  }

  render() {
    return (
      <div>
        <h3>Picks</h3>
        <div>
          {this.renderPicks()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { pickSets: state.pickSets };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPickSets}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PickSets);
