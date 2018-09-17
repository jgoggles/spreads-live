import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class GameCard extends Component {
  render() {
    const { game } = this.props;
    const scoreWidth = {width: '40px'};
    return (
      <Table bordered condensed>
        <tbody>
          <tr className="away">
            <td>{game.away.full_name}</td>
            <td style={scoreWidth}>{game.away.score}</td>
          </tr>
          <tr className="home">
            <td>{game.home.full_name}</td>
            <td>{game.home.score}</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default GameCard;

