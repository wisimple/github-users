import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '')
      this.props.setAlert('Please enter something to search', 'light');
    else this.props.searchUsers(this.state.text);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} className='mb-3'>
        <Form.Group controlId='formBasicEmail'>
          <Form.Control
            type='text'
            name='text'
            placeholder='Search Users'
            value={this.state.text}
            onChange={this.onChange}
          />
        </Form.Group>

        <Button variant='secondary' type='submit' block>
          Submit
        </Button>
      </Form>
    );
  }
}

export default Search;
