import React, { Component } from 'react';
import Scores from './components/Scores'
import PickSets from './components/PickSets'
import Standings from './components/Standings'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Scores />
          <PickSets />
          <Standings />
        </div>
      </div>
    );
  }
}

export default App;
