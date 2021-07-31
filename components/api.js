import axios from "axios";

let url = "http://127.0.0.1:3003/users";

export const get_note = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};
export const post_note = async (users) => {
  return await axios.post(url, users);
};
