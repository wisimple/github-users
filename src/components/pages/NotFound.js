import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NotFound = () => {
  return (
    <div>
      <h1>Not found!</h1>
      <p>The page you are looking for not found.</p>
      <Link to='/'>
        <Button variant='danger'>Go To Home Page</Button>
      </Link>
    </div>
  );
};

export default NotFound;
