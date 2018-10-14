import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { picksAvailable } from './actions/access_actions';
import Scores from './components/Scores'
import PickSets from './components/PickSets'
import Standings from './components/Standings'
import Stats from './components/Stats'
import NotAvailable from './components/NotAvailable'
import { 
  Table, 
  Grid, 
  Row, 
  Col, 
  Alert, 
  Button, 
  ButtonToolbar, 
  Collapse 
} from 'react-bootstrap';
import './components/Base.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showStats: false
    }

    this.toggleStats = this.toggleStats.bind(this);
  }

  componentDidMount() {
    this.props.picksAvailable();
  }

  toggleStats() {
    this.setState({showStats: !this.state.showStats});
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
          <Col md={12}>
            <ButtonToolbar className="controls">
              <Button bsSize="small" onClick={this.toggleStats}>Stats</Button>
            </ButtonToolbar>
            <Collapse in={this.state.showStats}>
              <div>
                <Row className="show-grid">
                  <Stats />
                </Row>
              </div>
            </Collapse>
          </Col>
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
