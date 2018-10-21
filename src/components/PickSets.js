import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import PickCard from './PickCard';
import './Base.css';

class PickSets extends Component {
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
      <div style={{"marginBottom": "20px"}}>
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
  return { 
    filter: state.filter
  };
}

export default connect(mapStateToProps, null)(PickSets);
