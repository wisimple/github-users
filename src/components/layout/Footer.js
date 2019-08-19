import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
library.add(faUsers);
const Footer = () => {
  return (
    <Fragment>
      <div className='text-center my-4'>
        <FontAwesomeIcon icon='users' size='lg' />
      </div>
    </Fragment>
  );
};

export default Footer;
