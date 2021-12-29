import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts";
import Header from "./Header";
import PostAPosts from "../components/PostAPosts";

const HomePosts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/posts")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="all-posts">
      <Header />
      <PostAPosts />
      <div className="posts-card">
        {data.map((posts) => (
          <Posts posts={posts} key={posts.id_posts} />
        ))}
      </div>
      <img
        alt="Entreprise groupomania"
        className="img-fond"
        src="./img/fond.png"
      ></img>
    </div>
  );
};

export default HomePosts;
