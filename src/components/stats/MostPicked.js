import React from 'react';
import { Table } from 'react-bootstrap';

const MostPicked = () => (
  <div>
    <Table>
      <thead>
        <tr>
          <th>Most Picked</th>
          <th>Picks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Broncos</td>
          <td>58</td>
        </tr>
        <tr>
          <td>Raiders</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Eagles</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Giants</td>
          <td>3</td>
        </tr>
      </tbody>
    </Table>
  </div>
)

export default MostPicked;
