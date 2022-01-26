import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const githubApi = () => {
    return axios.create({
      baseURL: "https://api.github.com",
      headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
    });
  };
  const searchUsers = async (text) => {
    setLoading();
    const api = githubApi();
    const user = await api.get(
      `/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: SEARCH_USERS, payload: user.data });
  };
  const getUser = async (userName) => {
    const user = await githubApi().get(
      `/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: GET_USER, payload: user.data });
  };

  const getRepos = async (userName) => {
    const repos = await githubApi().get(
      `/users/${userName}/repos?per_page=5&sort=created:asc`
    );
    dispatch({ type: GET_REPOS, payload: repos.data });
  };

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };
  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser,
        getRepos,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
