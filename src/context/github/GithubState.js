import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SET_INITIAL_USERS,
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  SET_LOADING,
  SET_REPOS_LOADING
} from '../types';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    reposLoading: false
  };

  const [state, dispacth] = useReducer(GithubReducer, initialState);

  // Set Initial Users
  const setInitialUsers = async () => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispacth({ type: SET_INITIAL_USERS, payload: res.data });
  };

  // Search Users
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispacth({ type: SEARCH_USERS, payload: res.data.items });
  };

  // Get Single User
  const getUser = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispacth({ type: GET_USER, payload: res.data });
  };

  // Get Repos
  const getUserRepos = async username => {
    setReposLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispacth({ type: GET_REPOS, payload: res.data });
  };

  // Set Loading
  const setLoading = () => dispacth({ type: SET_LOADING });

  // Set Repos Loading
  const setReposLoading = () => dispacth({ type: SET_REPOS_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        reposLoading: state.reposLoading,
        searchUsers,
        setInitialUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
