import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import NotFound from "../../pages/NotFound";
import Profil from "../../pages/Profil";
import HomePosts from "../../pages/HomePosts";
import ParamUsers from "../../pages/ParamUsers";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/paramusers" element={<ParamUsers />} />
        <Route path="/homeposts" element={<HomePosts />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
