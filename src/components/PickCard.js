import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/filter_actions';
import { Table, Collapse, Tooltip, OverlayTrigger } from 'react-bootstrap';
import './PickCard.css';
import './Base.css';

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
        let backgroundColor;
        if (pick.result === "W") {
          backgroundColor = "#d4edda"
        } else if (pick.result === "L") {
          backgroundColor = "#f8d7da"
        }

        return (
          <tr className="user-pick" key={pick.id} style={{"backgroundColor": backgroundColor}}>
            <td>{pick.team}</td>
            <td style={spreadWidth}>{pick.spread}</td>
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

  renderStar() {
    if (this.props.filter.favorites.includes(this.props.pickSet.id)) {
      return (
        <i className="fas fa-star" style={{"color":"green"}}></i>
      )
    } else {
      return (
        <i className="far fa-star" style={{"color":"green"}}></i>
      )
    }
  }

  render() {
    const { pickSet } = this.props;
    const currentUser = pickSet.current;
    let tableStyle;
    if (currentUser) {
      tableStyle = {
        "backgroundColor": "#d1ecf1"
      }
    }

    const tooltip = (
      <Tooltip id="tooltip">
        Toggle favorite
      </Tooltip>
    )

    return (
      <div>
        <Table condensed hover className="pick-set-table" style={tableStyle}>
          <tbody>
            <tr className="pick-set-head" onClick={this.togglePicks}>
              <td style={{"width":"20px"}}onClick={(e) => {
                e.stopPropagation();
                this.props.toggleFavorite(pickSet.id);
              }}>
                <OverlayTrigger placement="top" overlay={tooltip} delayShow={500}>
                  {this.renderStar()}
                </OverlayTrigger>
              </td>
              <td style={{"maxWidth":"220px", "overflow": "hidden", "textOverflow":"ellipsis", "whiteSpace":"nowrap"}}>{pickSet.user}</td>
              <td style={{"textAlign": "right"}}>{this.renderRecord()}</td>
            </tr>
          </tbody>
        </Table>
        <Collapse in={this.state.showRows}>
          <div>
            <Table condensed bordered className="lone-table" key={pickSet.id}>
              <tbody>
                {this.renderTeams()}
              </tbody>
            </Table>
          </div>
        </Collapse>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleFavorite
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PickCard);
