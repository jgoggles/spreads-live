import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import './Base.css';

class Standings extends Component {
  thisWeek(pickSet) {
    const { win, loss } = pickSet.record;
    return win - loss;
  }

  renderStanding() {
    const pickSets = _.sortBy(this.props.pickSets, [(ps) => { return -ps.new_points }]); 
    let rowStyle;
    return (
      _.map(pickSets, pickSet => {
        if (pickSet.current) {
          rowStyle = {
            "backgroundColor": "#d1ecf1"
          }
        } else { rowStyle = null }
        return (
          <tr key={pickSet.id} style={rowStyle}>
            <td>{pickSet.user}</td> 
            <td className="right">{this.thisWeek(pickSet)}</td> 
            <td className="right">{pickSet.new_points}</td> 
          </tr>
        )
      })
    )
  }

  render() {
    return (
      <div>
        <h3>Standings</h3>
        <Table condensed>
          <thead>
            <tr>
              <th></th>
              <th className="right">This Week</th>
              <th className="right">Overall</th>
            </tr>
          </thead>
          <tbody>
            {this.renderStanding()}
          </tbody>
        </Table>      
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    pickSets: state.pickSets
  };
}

export default connect(mapStateToProps, null)(Standings);
