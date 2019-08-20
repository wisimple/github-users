import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import CustomNavbar from './components/layout/CustomNavbar';
import Container from 'react-bootstrap/Container';
import Alert from './components/layout/CustomAlert';

import User from './components/users/User';
import About from './components/pages/About';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Fragment>
            <CustomNavbar />
            <Container className='pt-3'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </Container>
            <Footer />
          </Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
