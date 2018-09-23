import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './Scores.css';

class GameCard extends Component {
  render() {
    const { game } = this.props;
    const scoreWidth = {width: '40px'};
    return (
      <Table className="score" bordered condensed>
        <tbody>
          <tr className="away">
            <td className="logo">
              <img src={game.away.logo} />
            </td>
            <td>{game.away.full_name}</td>
            <td style={scoreWidth}>{game.away.score}</td>
          </tr>
          <tr className="home">
            <td className="logo">
              <img src={game.home.logo} />
            </td>
            <td>{game.home.full_name}</td>
            <td>{game.home.score}</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default GameCard;

