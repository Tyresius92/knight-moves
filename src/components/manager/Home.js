import React from "react";
import { withAuthorization } from "./Session";

const Home = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <p>The Home Page is accessible by every signed in user.</p>
    </div>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home); 