import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CustomSpinner from '../layout/CustomSpinner';

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Repos from '../repos/Repos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronLeft);

const User = ({ user, getUser, getUserRepos, repos, loading, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    login,
    avatar_url,
    bio,
    hireable,
    name,
    public_repos,
    email,
    company,
    blog,
    html_url
  } = user;
  if (loading) return <CustomSpinner />;
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
      <Row className='text-center'>
        <Col>
          <Image src={avatar_url} style={{ width: '120px' }} rounded />
          <br />
          <span>{login}</span>
        </Col>
      </Row>
      <Row className='text-center'>
        <Col>
          <h2>{name}</h2>
          {bio && (
            <Fragment>
              <span>{bio}</span>
              <br />
            </Fragment>
          )}
          {email && (
            <Fragment>
              <strong>Email: </strong>
              <a href={'mailto:' + email}>{email}</a>
              <br />
            </Fragment>
          )}
          {company && (
            <Fragment>
              <strong>Company: </strong> {company}
              <br />
            </Fragment>
          )}
          {blog && (
            <Fragment>
              <strong>Blog: </strong>{' '}
              <a href={blog} target='_blank' rel='noopener noreferrer'>
                {blog}
              </a>
              <br />
            </Fragment>
          )}
          <div className='my-2'>
            <a
              href={html_url + '?tab=repositories'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Badge variant='secondary'>
                {'Public repos: '} {public_repos}
              </Badge>{' '}
            </a>
            {hireable ? (
              <Badge variant='success'>Hireable</Badge>
            ) : (
              <Badge variant='warning'>Not Hierable</Badge>
            )}
          </div>
          <Button
            href={html_url}
            target='_blank'
            rel='noopener noreferrer'
            size='sm'
            variant='secondary'
          >
            Visit Github Profile
          </Button>
        </Col>
      </Row>
      <hr />
      <h4>Repositories</h4>
      <Repos repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired
};

export default User;
