import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import GithubContext from '../../context/github/githubContext';

import CustomSpinner from '../layout/CustomSpinner';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Repos from '../repos/Repos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import CustomMessage from '../layout/CustomMessage';
import UserSummary from './UserSummary';
import UserChart from './UserChart';
library.add(faChevronLeft);

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const {
    user,
    loading,
    getUser,
    getUserRepos,
    repos,
    reposLoading
  } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  if (loading) return <CustomSpinner />;
  if (Object.entries(user).length === 0 && user.constructor === Object)
    return <CustomMessage msg='User not found' />;
  return (
    <Fragment>
      <Row>
        <Col>
          <Link to='/'>
            <Button variant='light'>
              <FontAwesomeIcon icon='chevron-left' /> Back
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <UserSummary user={user} />
        </Col>
        <Col>
          <UserChart repos={repos} loading={reposLoading} />
        </Col>
      </Row>
      <hr />
      <h4>Repositories</h4>
      <Repos repos={repos} loading={reposLoading} />
    </Fragment>
  );
};

export default User;
