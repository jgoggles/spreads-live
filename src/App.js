import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { scoreboardAvailable } from './actions/access_actions';
import { fetchPickSets } from './actions/pick_set_actions';
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
    this.props.scoreboardAvailable()
    .then(res => {
      if (this.props.showPicks) {
        this.props.fetchPickSets();
      }
    })
  }

  toggleStats() {
    this.setState({showStats: !this.state.showStats});
  }

  filterUndefeated() {
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
              <Button bsSize="xsmall" onClick={this.toggleStats}>Stats</Button>
              <Button bsSize="xsmall">3-0</Button>
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
            <PickSets pickSets={this.props.pickSets} />
          </Col>
          <Col md={4}>
            <Standings pickSets={this.props.pickSets} />
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
  return { 
    showPicks: state.access,
    pickSets: state.pickSets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    scoreboardAvailable,
    fetchPickSets
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
