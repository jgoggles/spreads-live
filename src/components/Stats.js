import _ from 'lodash';
import React, { Component } from 'react';
import { Table, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BasicStats from './stats/BasicStats';
import MostAction from './stats/MostAction';
import MostPicked from './stats/MostPicked';
import './Stats.css';

class Stats extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div className="stats-container">
        <Col md={2}>
          <BasicStats />
        </Col>
        <Col md={2}>
          <MostAction />
        </Col>
        <Col md={2}>
          <MostPicked />
        </Col>
      </div>
    )
  }
}

//function mapStateToProps(state) {
  //return { pickSets: state.pickSets };
//}

//function mapDispatchToProps(dispatch) {
  //return bindActionCreators({fetchPickSets}, dispatch);
//}

//export default connect(mapStateToProps, mapDispatchToProps)(PickSets);
export default connect(null, null)(Stats);

