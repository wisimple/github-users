import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
library.add(faUsers);

const CustomNavbar = ({ title, icon }) => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='danger'
      variant='dark'
      sticky='top'
    >
      <Navbar.Brand as={Link} to='/'>
        <FontAwesomeIcon icon={icon} /> {title}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto' />
        <Nav>
          <NavLink exact to='/about' className='nav-link'>
            About
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

CustomNavbar.defaultProps = {
  title: 'Github Users',
  icon: 'users'
};
CustomNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

export default CustomNavbar;
