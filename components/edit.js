import React from "react";
import { useEffect, useState } from "react";
import { get_note, post_note } from "./api";
import { useParams } from "react-router-dom";

const intial_values = {
  subtopic: "",
  topic: "",
  notes: "",
};
const Edit = () => {
  const [users, setUsers] = useState(intial_values);
  const [subtopic, topic, notes] = new Array(users);
  const { id } = useParams();
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    const response = await get_note(id);
    setUsers(response.data);
    console.log(users);
  };
  const onvalueChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const add_notes = async () => {
    await post_note(users);
  };
  return (
    <div>
      <h3 className="text-center mt-3 mb-0">Edit Notes</h3>
      <form style={{ margin: "auto", marginTop: "50px", width: "50%" }}>
        <div class="form-group">
          <label for="exampleFormControlInput1">
            <div className="font-weight-bold">Topic</div>
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Fiscal-Policy"
            onChange={(e) => onvalueChange(e)}
            name="subtopic"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1" className="font-weight-bold">
            <div className="font-weight-bold">Topic Domain</div>
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Economy"
            onChange={(e) => onvalueChange(e)}
            name="topic"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">
            <div className="font-weight-bold">Notes</div>
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => onvalueChange(e)}
            name="notes"
          ></textarea>
        </div>
        <button
          className="btn btn-outline-secondary"
          onClick={() => add_notes()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Edit;
