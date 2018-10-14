import React from 'react';
import { Table } from 'react-bootstrap';

const BasicStats = ({ homeVsAway, favVsDog }) => (
  <div>
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Picks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Home</td>
          <td>{homeVsAway.home}</td>
        </tr>
        <tr>
          <td>Away</td>
          <td>{homeVsAway.away}</td>
        </tr>
        <tr>
          <td>Favorites</td>
          <td>{favVsDog.favorite}</td>
        </tr>
        <tr>
          <td>Underdogs</td>
          <td>{favVsDog.underdog}</td>
        </tr>
      </tbody>
    </Table>
  </div>
)

export default BasicStats;
