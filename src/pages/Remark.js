import React, { useState } from "react";
import DeleteRemarks from "../components/DeleteRemarks";
import EditRemarks from "../components/EditRemarks";

const Remarks = (props) => {
  const { idPosts, data } = props;
  const [editMenu, setEditMenu] = useState(false);
  let idUserLocalS = [];
  idUserLocalS = JSON.parse(localStorage.getItem("id_users"));

  function toggleEdit() {
    setEditMenu((value) => {
      return !value;
    });
  }
  return (
    <div>
      <div className="remarks-box">
        {idUserLocalS === data.id_users || idUserLocalS === "1" ? (
          <div className="box-icon-remarks">
            <button onClick={toggleEdit}>
              {editMenu && (
                <svg
                  className="icon-remarks close-remarks"
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
              {!editMenu && (
                <svg
                  className="icon-remarks edit-remarks"
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
            </button>
            <DeleteRemarks idPosts={idPosts} idRemarks={data.id_remarks} />
          </div>
        ) : (
          <div></div>
        )}
        {editMenu && (
          <EditRemarks idPosts={idPosts} idRemarks={data.id_remarks} />
        )}
        <p>{data.remark}</p>
      </div>
    </div>
  );
};

export default Remarks;
