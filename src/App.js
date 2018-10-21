import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { scoreboardAvailable } from './actions/access_actions';
import { fetchPickSets } from './actions/pick_set_actions';
import { filterWins, clearFilters } from './actions/filter_actions';
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
  ToggleButtonGroup,
  ToggleButton,
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

  // change how we're filtering here because its dumb
  filterPickSets(pickSets = this.props.pickSets) {
    if (this.props.filter.wins === 3) {
      return _.filter(pickSets, ps => {
        return ps.record.win === this.props.filter.wins
      }) 
    } else if (this.props.filter.wins === 0) {
      return _.filter(pickSets, ps => {
        return ps.record.loss === 3
      }) 
    } else {
      return pickSets
    }
  }

  renderFavoriteStandings() {
    if (this.props.filter.favorites.length > 0) {
      return <Standings pickSets={this.filterPickSets(this.filterFavorites())} />
    }
  }

  renderFavoritesPickSets() {
    if (this.props.filter.favorites.length > 0) {
      return <PickSets pickSets={this.filterPickSets(this.filterFavorites())} />
    }
  }

  filterFavorites() {
    return _.filter(this.props.pickSets, ps => {
      if (this.props.filter.favorites.includes(ps.id)) {
        return ps
      }
    }) 
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
              <ToggleButtonGroup bsSize="xsmall" type="radio" name="options" defaultValue={'clear'}>
                <ToggleButton value={3} onClick={() => this.props.filterWins(3)}>3-0</ToggleButton>
                <ToggleButton value={0} onClick={() => this.props.filterWins(0)}>0-3</ToggleButton>
                <ToggleButton value={'clear'} onClick={this.props.clearFilters}>All</ToggleButton>
              </ToggleButtonGroup>
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
            <h3>Picks</h3>
            {this.renderFavoritePickSets()}
            <PickSets pickSets={this.filterPickSets()} />
          </Col>
          <Col md={4}>
            <h3>Standings</h3>
            {this.renderFavoriteStandings()}
            <Standings pickSets={this.filterPickSets()} />
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
    pickSets: state.pickSets,
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    scoreboardAvailable,
    fetchPickSets,
    filterWins,
    clearFilters
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
