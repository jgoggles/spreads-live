import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPickSets } from '../actions/pick_set_actions';
import PickCard from './PickCard';
import './Base.css';

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
          <Table condensed className="lone-table">
            <thead>
              <tr>
                <th></th>
                <th className="right">Record</th>
              </tr>
            </thead>
          </Table>      
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
