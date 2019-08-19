import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = ({ searchUsers, setAlert }) => {
  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') setAlert('Please enter something to search', 'light');
    else searchUsers(text);
  };

  return (
    <Form onSubmit={onSubmit} className='mb-3'>
      <Form.Group controlId='formBasicEmail'>
        <Form.Control
          type='text'
          name='text'
          placeholder='Search Users'
          value={text}
          onChange={onChange}
        />
      </Form.Group>

      <Button variant='secondary' type='submit' block>
        Submit
      </Button>
    </Form>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
