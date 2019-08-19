import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import CustomSpinner from '../layout/CustomSpinner';

import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    getUser: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
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
    } = this.props.user;
    const { loading } = this.props;
    if (loading) return <CustomSpinner />;
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
                <a href={blog} target='_blank'>
                  {blog}
                </a>
                <br />
              </Fragment>
            )}
            <div className='my-2'>
              <a href={html_url + '?tab=repositories'} target='_blank'>
                <Badge variant='secondary'>
                  {'Repositories ' + public_repos}
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
              size='sm'
              variant='secondary'
            >
              Visit Github Profile
            </Button>
          </Col>
        </Row>
        <hr />
      </Fragment>
    );
  }
}

export default User;
