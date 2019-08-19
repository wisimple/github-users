import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
const CustomSpinner = () => {
  return (
    <div className='text-center'>
      <Spinner animation='border' variant='danger' />
    </div>
  );
};

export default CustomSpinner;
