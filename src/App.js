import React, { Component } from 'react';
import Scores from './components/Scores'
import PickSets from './components/PickSets'
import Standings from './components/Standings'
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={4}>
            <Scores />
          </Col>
          <Col md={4}>
            <PickSets />
          </Col>
          <Col md={4}>
            <Standings />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
