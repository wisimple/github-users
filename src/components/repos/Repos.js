import React from 'react';
import PropTypes from 'prop-types';

import ListGroup from 'react-bootstrap/ListGroup';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return (
    <ListGroup>
      {repos.map(repo => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </ListGroup>
  );
};

Repos.propTypes = {
  repo: PropTypes.array.isRequired
};

export default Repos;
