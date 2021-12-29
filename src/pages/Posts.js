import React, { useState, useEffect } from "react";
import Remarks from "./Remark";
import PostsARemark from "../components/PostsARemark";
import EditPosts from "../components/EditPosts";
import DeletePosts from "../components/DeletePosts";
import axios from "axios";

const Posts = (props) => {
  const { posts } = props;
  const [data, setData] = useState([]);
  const [remarks, setRemarks] = useState([]);
  const [editMenu, setEditMenu] = useState(false);
  const [iconCloseMenu, setIconCloseMenu] = useState(false);
  const [iconEditMenu2, setIconEditMenu2] = useState(true);
  let idUserLocalS = [];
  idUserLocalS = JSON.parse(localStorage.getItem("id_users"));

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/posts")
      .then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${posts.id_posts}/remarks`)
      .then((res) => setRemarks(res.data));
  }, []);

  const fonctionEditMenu = (e) => {
    if (e.target.id === "iconEditMenu") {
      setEditMenu(true);
      setIconCloseMenu(true);
      setIconEditMenu2(false);
    }
  };

  const fonctionCloseMenu = (e) => {
    if (e.target.id === "iconCloseMenu") {
      setEditMenu(false);
      setIconCloseMenu(false);
      setIconEditMenu2(true);
    }
  };

  return (
    <div className="card-box">
      {idUserLocalS === posts.id_users || idUserLocalS === "1" ? (
        <div className="box-icon-posts">
          {iconCloseMenu && (
            <svg
              onClick={fonctionCloseMenu}
              className="icon-posts close"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
              id="iconCloseMenu"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          )}
          {iconEditMenu2 && (
            <svg
              onClick={fonctionEditMenu}
              className="icon-posts edit"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
              id="iconEditMenu"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <g>
                    <path d="M3,21l3.75,0L17.81,9.94l-3.75-3.75L3,17.25L3,21z M5,18.08l9.06-9.06l0.92,0.92L5.92,19L5,19L5,18.08z" />
                  </g>
                  <g>
                    <path d="M18.37,3.29c-0.39-0.39-1.02-0.39-1.41,0l-1.83,1.83l3.75,3.75l1.83-1.83c0.39-0.39,0.39-1.02,0-1.41L18.37,3.29z" />
                  </g>
                </g>
              </g>
            </svg>
          )}
          <DeletePosts idPosts={posts.id_posts} />
        </div>
      ) : (
        <div></div>
      )}
      {editMenu && (
        <EditPosts
          posts={posts}
          key={posts.id_posts}
          idPosts={posts.id_posts}
          idUsers={posts.id_users}
          descPosts={posts.description}
        />
      )}
      <h2>{posts.title}</h2>
      <p className="description-posts">{posts.description}</p>
      <img className="img-posts" src={posts.img} alt={posts.title}></img>
      {remarks.map((remark) => {
        return <Remarks data={remark} idPosts={posts.id_posts} />;
      })}
      <PostsARemark idPosts={posts.id_posts} />
    </div>
  );
};

export default Posts;
