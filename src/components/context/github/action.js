import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
});

export const searchUsers = async (text) => {
  const users = await githubApi.get(
    `/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  );
  return users.data.items;
};

export const getUser = async (userName) => {
  const user = await githubApi.get(
    `/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  );
  return user.data;
};

export const getRepos = async (userName) => {
  const repos = await githubApi.get(
    `/users/${userName}/repos?per_page=5&sort=created:asc`
  );
  return repos.data;
};
