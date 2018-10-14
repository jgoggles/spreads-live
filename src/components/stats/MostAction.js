import React from 'react';
import { Table } from 'react-bootstrap';

const listItems = (stats) => {
  return stats.map(game => {
    return (
      <tr key={game.id}>
        <td>{game.away} at {game.home}</td>
        <td>{game.freq}</td>
      </tr>
    )
  }
)}

const MostAction = ({ stats }) => (
  <div>
    <Table>
      <thead>
        <tr>
          <th>Most Action</th>
          <th>Picks</th>
        </tr>
      </thead>
      <tbody>
        {listItems(stats)}
      </tbody>
    </Table>
  </div>
)

export default MostAction;
