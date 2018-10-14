import React from 'react';
import { Table } from 'react-bootstrap';

const listItems = (stats) => {
  return stats.map(team => {
    return (
      <tr key={team.id}>
        <td>{team.name}</td>
        <td>{team.freq}</td>
      </tr>
    )
  }
)}

const MostPicked = ({ stats }) => (
  <div>
    <Table>
      <thead>
        <tr>
          <th>Most Picked</th>
          <th>Picks</th>
        </tr>
      </thead>
      <tbody>
        {listItems(stats)}
      </tbody>
    </Table>
  </div>
)

export default MostPicked;
