import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import CustomNavbar from './components/layout/CustomNavbar';
import Container from 'react-bootstrap/Container';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/CustomAlert';

import User from './components/users/User';
import About from './components/pages/About';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  // Search github user
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // Get single Github user
  getUser = async username => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  // Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 500);
  };

  render() {
    const { users, user, loading } = this.state;
    return (
      <Router>
        <Fragment>
          <CustomNavbar />
          <Container className='pt-3'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                component={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      setAlert={this.setAlert}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    );
  }
}

export default App;
