import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '')
      alertContext.setAlert('Please enter something to search', 'light');
    else githubContext.searchUsers(text);
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

export default Search;
