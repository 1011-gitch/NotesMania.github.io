import React from "react";
const footer = () => {
  return (
    <>
      <h4 className="text-center">Get Connected with us</h4>
      <div
        style={{
          backgroundColor: "#F5FFFA",
          height: "100px",
          padding: "20px",
        }}
      >
        <form>
          <div className="container d-flex justify-content-around align-items-center">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-check">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default footer;
