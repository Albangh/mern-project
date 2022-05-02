import React from "react";
import LeftNav from "../components/LeftNav";
import Thread from "../components/Thread";

const Home = (props) => {
  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <Thread />
      </div>
    </div>
  );
};

export default Home;
