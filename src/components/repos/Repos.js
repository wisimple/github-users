import React from 'react';
import PropTypes from 'prop-types';

import ListGroup from 'react-bootstrap/ListGroup';
import RepoItem from './RepoItem';
import CustomSpinner from '../layout/CustomSpinner';
import CustomMessage from '../layout/CustomMessage';

const Repos = ({ repos, loading }) => {
  if (loading) return <CustomSpinner />;
  if (repos.length === 0) return <CustomMessage msg='User has no repos' />;
  return (
    <ListGroup>
      {repos.map(repo => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </ListGroup>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
