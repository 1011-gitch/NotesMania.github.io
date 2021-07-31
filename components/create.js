import React from "react";
import { useState, useEffect } from "react";
import { get_note } from "./api";
import { Link } from "react-router-dom";

const Create = () => {
  useEffect(() => {
    get_notes();
  }, []);
  const [users, setUsers] = useState([]);
  const get_notes = async () => {
    const response = await get_note();
    setUsers(response.data);
  };
  return (
    <div style={{ margin: "10px", backgroundColor: "#C0C0C0" }} className="row">
      {users.map((user) => (
        <div className="col-lg-4 col-md-6">
          <div className="card m-4 p-4">
            <div className="card-body">
              <h5 className="card-title">
                <div className="d-flex">
                  <u className="mr-auto">{user.subtopic}</u>
                  <div>
                    <Link
                      className="btn btn-outline-secondary"
                      to={`/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button className="btn btn-secondary">Delete</button>
                  </div>
                </div>
              </h5>
              <h6 className=" card-subtitle mb-2 text-muted">{user.topic}</h6>
              <p className="card-text">{user.notes}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Create;
