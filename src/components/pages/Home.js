import React, { Fragment } from "react";
import Search from "../users/SearchUser";
import Users from "../users/Users";

function Home() {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
}

export default Home;
