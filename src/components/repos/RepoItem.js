import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';

import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faStar);

const RepoItem = ({ repo }) => {
  return (
    <ListGroup.Item
      action
      href={repo.html_url}
      target='_blank'
      rel='noopener noreferrer'
    >
      {repo.name} <br />
      <Badge variant='light'>{repo.language}</Badge>{' '}
      <span style={{ fontSize: '0.8rem' }}>
        {moment(repo.created_at).format('DD-MMMM-YYYY')}
      </span>
      <Badge variant='success' style={{ float: 'right' }}>
        <FontAwesomeIcon icon='star' /> {repo.stargazers_count}
      </Badge>
    </ListGroup.Item>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object
};

export default RepoItem;
