import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import { About } from "./components/pages/About";
import GithubState from "./components/context/github/GithubState";
import AlertState from "./components/context/alert/AlertState";
import "./App.css";
import { Alert } from "./components/layout/Alert";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar icon="fab fa-github" />
            <div className="container">
              <Alert></Alert>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/user/:userName"
                  element={
                    <Fragment>
                      <User />
                    </Fragment>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
