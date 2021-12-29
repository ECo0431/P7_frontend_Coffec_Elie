import React, { useState } from "react";
import Header from "../pages/Header";
import DeleteUsers from "../components/DeleteUsers";
import axios from "axios";

const ParamUsers = () => {
  const [id_users] = useState([]);
  axios({
    method: "get",
    url: ` http://localhost:3000/api/users/`,
    withCredentials: true,
    data: {
      id_users: id_users,
    },
  });

  return (
    <div>
      <Header idUsers={id_users} />

      <DeleteUsers />
    </div>
  );
};

export default ParamUsers;
