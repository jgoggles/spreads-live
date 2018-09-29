import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { picksAvailable } from './actions/access_actions';
import Scores from './components/Scores'
import PickSets from './components/PickSets'
import Standings from './components/Standings'
import NotAvailable from './components/NotAvailable'
import { Table, Grid, Row, Col, Alert } from 'react-bootstrap';

class App extends Component {
  componentDidMount() {
    this.props.picksAvailable();
  }

  render() {
    if (!this.props.showPicks) {
      return (
        <NotAvailable />
      )
    }

    return (
      <Grid>
        <Row className="show-grid">
          <Col md={4}>
            <PickSets />
          </Col>
          <Col md={4}>
            <Standings />
          </Col>
          <Col md={4}>
            <Scores />
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { showPicks: state.access };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({picksAvailable}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
