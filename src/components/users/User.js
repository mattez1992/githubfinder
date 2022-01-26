import React, { Fragment, useEffect, useContext } from "react";
import { Spinner } from "../layout/Spinner";
import { Link, useParams } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../context/github/githubContext";
const User = () => {
  const { userName } = useParams();
  const githubContext = useContext(GithubContext);
  const {
    name,
    avatar_url,
    location,
    bio,
    login,
    html_url,
    followers,
    following,
    public_gists,
    public_repos,
    hireable,
    blog,
    company,
  } = githubContext.user;
  useEffect(() => {
    githubContext.getUser(userName);
    githubContext.getRepos(userName);
    // eslint-disable-next-line
  }, []);
  if (githubContext.loading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back
      </Link>
      Hireable: {""}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt="avatar"
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              <strong>Username: {login} </strong>
            </li>
            <li>
              <strong>Company: {company}</strong>
            </li>
            <li>
              <strong>
                Website: <a href={`https://${blog}`}>{blog}</a>{" "}
              </strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public repos: {public_repos}</div>
        <div className="badge badge-dark">Public gists: {public_gists}</div>
      </div>
      <Repos />
    </Fragment>
  );
};
export default User;
