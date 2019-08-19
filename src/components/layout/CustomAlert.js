import React from 'react';
import Alert from 'react-bootstrap/Alert';

const CustomAlert = ({ alert }) => {
  return (
    alert !== null && (
      <Alert variant={alert.type}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </Alert>
    )
  );
};

export default CustomAlert;
