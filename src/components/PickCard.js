import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class PickCard extends Component {
  renderTeams() {
    const spreadWidth = {width: '40px'};
    return (
      _.map(this.props.pickSet.picks, pick => {
        return (
          <tr key={pick.id}>
            <td>{pick.team}</td>
            <td style={spreadWidth}>{pick.spread}</td>
          </tr>
        )
      })
    )
  }

  render() {
    const { pickSet } = this.props;
    return (
      <Table bordered>
        <tbody>
          <tr>
            <td colSpan="2">{pickSet.user}</td>
          </tr>
          {this.renderTeams()}
        </tbody>
      </Table>
    )
  }
}

export default PickCard;

