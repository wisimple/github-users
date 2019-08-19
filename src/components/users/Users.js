import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomSpinner from '../layout/CustomSpinner';

const Users = ({ users, loading }) => {
  if (loading) return <CustomSpinner />;
  if (users.length === 0)
    return (
      <div className='text-center'>
        <span>No users found</span>
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

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
