import React, { useState } from "react";
import axios from "axios";

const PostAPosts = (e) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  let idUserLocalS = [];
  idUserLocalS = JSON.parse(localStorage.getItem("id_users"));
  // let tokenLocalS = [];
  // tokenLocalS = JSON.parse(localStorage.getItem("token"));
  const postAPost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", img);
    axios({
      method: "post",
      url: `http://localhost:3000/api/users/${idUserLocalS}/posts`,
      withCredentials: true,
      data: formData,
      // headers: {
      //   Authorization: "Bearer " + JSON.parse(tokenLocalS),
      // },
    })
      .then((res) => {
        if (res.data.error) {
          console.log("errors");
        } else {
          window.location = "/homeposts";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form action="" onSubmit={(e) => postAPost(e)} id="posts-form">
      <div className="box-posts box-posts-title">
        <label htmlFor="title">Titre</label>
        <br />
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <br />
      <div className="box-posts box-posts-description">
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          type="text"
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <br />
      <input
        className="btn-img-post"
        type="file"
        id="avatar"
        name="avatar"
        accept="images/png, images/jpeg"
        onChange={(e) => setImg(e.target.files[0])}
      ></input>
      <br />
      <div className="box-posts box-posts-btn">
        <input className="btn-posts" type="submit" value="Publier" />
      </div>
    </form>
  );
};

export default PostAPosts;
