import axios from "axios";
import React from "react";
import Routes from "./components/Routes/index";

const App = () => {
  const token = localStorage.token;
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;
