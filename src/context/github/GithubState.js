import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SET_INITIAL_USERS,
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  GET_USER_ERROR,
  SET_LOADING,
  SET_REPOS_LOADING,
  GET_REPOS_ERROR
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

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
      `https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispacth({ type: SET_INITIAL_USERS, payload: res.data });
  };

  // Search Users
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispacth({ type: SEARCH_USERS, payload: res.data.items });
  };

  // Get Single User
  const getUser = async username => {
    setLoading();

    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );

      dispacth({ type: GET_USER, payload: res.data });
    } catch (error) {
      dispacth({ type: GET_USER_ERROR });
    }
  };

  // Get Repos
  const getUserRepos = async username => {
    setReposLoading();

    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );

      dispacth({ type: GET_REPOS, payload: res.data });
    } catch (error) {
      dispacth({ type: GET_REPOS_ERROR });
    }
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
