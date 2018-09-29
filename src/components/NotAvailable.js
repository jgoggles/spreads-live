import React from 'react';
import { Grid, Row, Col, Alert } from 'react-bootstrap';

const NotAvailable = () => (
  <Grid>
    <Row className="show-grid">
      <Col md={6} mdPush={3}>
        <Alert style={{"marginTop": "25px"}} bsStyle="info">
          <h4>Scoreboard not available</h4>
          <p>
            Check back Sunday morning at 10am MST.
          </p>
        </Alert>
      </Col>
    </Row>
  </Grid>
)

export default NotAvailable;
