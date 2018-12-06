import React, { Component} from 'react';
import { Button, Row, Col} from 'react-materialize';
import { Link } from 'react-router-dom';

const Lessons = () => (
  <div className='container'>
    <h1>Lessons</h1>
    <Row>
      <Col s={6}>
        <Button waves='purple' className="lessons-btn">
          <Link to='codingI-lessons'>
            Coding I
          </Link>
        </Button>
      </Col>
      <Col s={6}>
        <Button waves='purple' className="lessons-btn">
          <Link to='codingII-lessons'>
            Coding II
          </Link>
        </Button>
      </Col>
    </Row>
  </div>
)
export default Lessons;