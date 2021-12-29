import React from "react";
import Log from "../components/Log";

const Home = () => {
  return (
    <div className="home">
      <img
        className="logo-groupomania"
        src="./img/icon-left-font-monochrome-white.png"
        alt="logo-groupomania"
      ></img>
      <div className="log-container">
        <Log signin={false} signup={true} />
      </div>
      <img
        alt="Entreprise Groupomania"
        className="img-fond"
        src="./img/fond.png"
      ></img>
    </div>
  );
};

export default Home;
