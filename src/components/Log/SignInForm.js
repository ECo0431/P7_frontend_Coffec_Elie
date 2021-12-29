import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailErrror = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: "http://localhost:3000/api/users/login",
      withCredentials: true,
      data: {
        email: email,
        pass: password,
      },
    })
      .then((res) => {
        // axios.defaults.headers.common.Authorization =
        //   "Bearer " + res.data.token;
        if (res.data.error) {
          console.log("errors");
        } else {
          window.location = "/homeposts";
          localStorage.setItem("id_users", res.data.userId);
          localStorage.setItem("token", res.data.token);
        }
      })
      .catch((err) => {
        console.log(err);
        emailErrror.innerHTML = "Email inconnu";
        passwordError.innerHTML = "Mot de passe invalide";
      });
  };

  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">E-mail</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="email error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="password error"></div>
      <br />
      <input className="btn-login" type="submit" value="Se connecter" />
    </form>
  );
};

export default SignInForm;
