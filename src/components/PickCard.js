import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './PickCard.css';

class PickCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRows: false
    }

    this.togglePicks = this.togglePicks.bind(this);
  }

  renderTeams() {
    const spreadWidth = {'width': '40px'};
    return (
      _.map(this.props.pickSet.picks, pick => {
        return (
          <tr key={pick.id}>
            <td>{pick.team}</td>
            <td style={spreadWidth}>{pick.spread}</td>
            <td style={spreadWidth}>{pick.result}</td>
          </tr>
        )
      })
    )
  }

  renderRecord() {
    const { record } = this.props.pickSet;
    return (
      `${record.win}-${record.loss}-${record.push}`
    )
  }

  togglePicks() {
    this.setState({showRows: !this.state.showRows});
  }

  rowStyle() {
    if (this.state.showRows) {
      return "table";
    } else {
      return "none";
    }
  }

  render() {
    const { pickSet } = this.props;
    const currentUser = pickSet.current;
    let tableStyle;
    if (currentUser) {
      tableStyle = {
        "backgroundColor": "#98FB98"
      }
    }

    return (
      <div>
        <Table condensed hover className="pick-set-table" style={tableStyle}>
          <tbody>
            <tr className="pick-set-head" onClick={this.togglePicks}>
              <td>{pickSet.user}</td>
              <td style={{"textAlign": "right"}}>{this.renderRecord()}</td>
            </tr>
          </tbody>
        </Table>
        <Table condensed bordered style={{"display": this.rowStyle()}} key={pickSet.id}>
          <tbody>
            {this.renderTeams()}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default PickCard;

