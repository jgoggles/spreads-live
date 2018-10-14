import React from 'react';
import { Table } from 'react-bootstrap';

const MostAction = () => (
  <div>
    <Table>
      <thead>
        <tr>
          <th>Most Action</th>
          <th>Picks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Broncos at Rams</td>
          <td>58</td>
        </tr>
        <tr>
          <td>Raiders at Chiefs</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Eagles at Panthers</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Giants at Bucs</td>
          <td>3</td>
        </tr>
      </tbody>
    </Table>
  </div>
)

export default MostAction;
