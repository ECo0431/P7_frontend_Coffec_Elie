import React, { useState } from "react";
import axios from "axios";

const EditPosts = (props, e) => {
  const { idPosts } = props;
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let idUserLocalS = [];
  idUserLocalS = JSON.parse(localStorage.getItem("id_users"));

  const putPost = (e) => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", img);
    axios({
      method: "put",
      url: `http://localhost:3000/api/users/${idUserLocalS}/posts/${idPosts}`,
      withCredentials: true,
      data: formData,
    });
  };

  return (
    <div>
      <div className="posts-form-edit">
        <form action="" onSubmit={putPost}>
          <div className="box-posts box-posts-title">
            <label className="color-purple" htmlFor="title">
              Titre
            </label>
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
            <label className="color-purple" htmlFor="description">
              Description
            </label>
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
            className="btn-img-edit-post"
            type="file"
            id="avatar"
            name="avatar"
            accept="images/png, images/jpeg"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <br />
          <br />
          <div className="box-posts box-posts-btn">
            <input className="btn-posts" type="submit" value="Modifier" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPosts;
