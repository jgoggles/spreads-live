import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class Standings extends Component {
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
            <td>{pickSet.new_points}</td> 
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
    standings: state.standings,
    pickSets: state.pickSets
  };
}

export default connect(mapStateToProps, null)(Standings);
