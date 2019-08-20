import {
  SEARCH_USERS,
  SET_LOADING,
  SET_INITIAL_USERS,
  GET_USER,
  GET_USER_ERROR,
  SET_REPOS_LOADING,
  GET_REPOS,
  GET_REPOS_ERROR
} from '../types';

export default (state, action) => {
  console.log(action);
  console.log(new Date().getMilliseconds());
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_REPOS_LOADING:
      return { ...state, reposLoading: true };
    case SET_INITIAL_USERS:
      return { ...state, users: action.payload, loading: false };
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };
    case GET_USER:
      return { ...state, user: action.payload, loading: false };
    case GET_USER_ERROR:
      return { ...state, loading: false };
    case GET_REPOS:
      return { ...state, repos: action.payload, reposLoading: false };
    case GET_REPOS_ERROR:
      return { ...state, reposLoading: false };
    default:
      return state;
  }
};
