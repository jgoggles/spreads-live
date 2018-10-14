import React from 'react';
import '../../css/stats.css';

const PoolRecord = ({ wins, losses, pushes }) => (
  <div id="pool-record">
    <h5>Pool Record</h5>
    {wins}-{losses}-{pushes}
  </div>
)

export default PoolRecord;
