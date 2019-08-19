import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronRight);

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <Card className='text-center'>
      <Card.Body>
        <LazyLoad offset={200} debounce={false} throttle={500} height='80px'>
          <Image
            src={avatar_url}
            style={{ width: '80px', marginBottom: '10px' }}
            rounded
          />
        </LazyLoad>
        <Card.Title style={{ fontWeight: 'bold' }}>{login}</Card.Title>

        <Link to={`/user/${login}`}>
          <Button variant='secondary' size='sm'>
            {'More '}
            <FontAwesomeIcon icon='chevron-right' />
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default UserItem;
