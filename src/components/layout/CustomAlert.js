import React, { useContext } from 'react';
import Alert from 'react-bootstrap/Alert';

import AlertContext from '../../context/alert/alertContext';

const CustomAlert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <Alert variant={alert.type}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </Alert>
    )
  );
};

export default CustomAlert;
