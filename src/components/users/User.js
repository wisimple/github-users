import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import GithubContext from '../../context/github/githubContext';

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
import CustomMessage from '../layout/CustomMessage';
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
      <Repos repos={repos} loading={reposLoading} />
    </Fragment>
  );
};

export default User;
