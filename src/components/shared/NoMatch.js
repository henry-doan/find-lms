import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <h1>
    Page Not Found
        <Link to='/'> Home</Link>
  </h1>
)

export default NoMatch;