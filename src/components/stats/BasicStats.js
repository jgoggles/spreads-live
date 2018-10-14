import React from 'react';
import { Table } from 'react-bootstrap';

const BasicStats = () => (
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
          <td>3</td>
        </tr>
        <tr>
          <td>Away</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Favorites</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Underdogs</td>
          <td>3</td>
        </tr>
      </tbody>
    </Table>
  </div>
)

export default BasicStats;
