import React, { useState } from "react";
import axios from "axios";

const EditRemarks = (props) => {
  const { idPosts } = props;
  const { idRemarks } = props;
  const [remark, setRemark] = useState("");
  const putRemark = (e) => {
    // e.preventDefault();
    axios({
      method: "put",
      url: `http://localhost:3000/api/users/1/posts/${idPosts}/remarks/${idRemarks}`,
      withCredentials: true,
      data: {
        remark: remark,
      },
    });
  };
  return (
    <div className="remarks-form-edit">
      <form action="" onSubmit={putRemark}>
        <label className="edit-remark-label" htmlFor="remark">
          Commentaire
        </label>
        <br />
        <textarea
          type="text"
          name="remark"
          id="remark"
          onChange={(e) => setRemark(e.target.value)}
        />
        <input
          className="btn-remark btn-edit-remark"
          type="submit"
          value="Modifier"
        />
      </form>
    </div>
  );
};

export default EditRemarks;
