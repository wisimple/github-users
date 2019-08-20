import React, { useContext, useEffect } from 'react';

import GithubContext from '../../context/github/githubContext';

import UserItem from './UserItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomSpinner from '../layout/CustomSpinner';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading, setInitialUsers } = githubContext;

  useEffect(() => {
    setInitialUsers();
    // eslint-disable-next-line
  }, []);

  if (loading) return <CustomSpinner />;
  if (users.length === 0)
    return (
      <div className='text-center'>
        <span>No user found</span>
      </div>
    );
  return (
    <Row>
      {users.map(user => (
        <Col
          xs={12}
          sm={6}
          md={4}
          xl={3}
          style={{ marginBottom: '10px' }}
          key={user.id.toString()}
        >
          <UserItem user={user} />
        </Col>
      ))}
    </Row>
  );
};

export default Users;
