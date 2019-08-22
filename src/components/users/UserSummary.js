import React, { Fragment } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const UserSummary = ({ user }) => {
  const {
    avatar_url,
    login,
    name,
    bio,
    email,
    company,
    blog,
    hireable,
    html_url,
    public_repos
  } = user;
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default UserSummary;
