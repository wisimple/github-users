import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <Card className='text-center'>
      <Card.Body>
        <Image
          src={avatar_url}
          style={{ width: '80px', marginBottom: '10px' }}
          rounded
        />
        <Card.Title style={{ fontWeight: 'bold' }}>{login}</Card.Title>

        <Link to={`/user/${login}`}>
          <Button variant='secondary' size='sm'>
            {'More '}
            <i className='fas fa-angle-right' />
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default UserItem;
