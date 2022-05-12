import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [udata, setUdata] = useState({
    name: "",
    password: "",
  });
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/home`;
    navigate(path);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const json = JSON.stringify(udata);
    localStorage.setItem("LoginUser", json);
    routeChange();
    setUdata({ name: "", password: "" });
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUdata({ ...udata, [name]: value });
  };
  return (
    <>
      <div className="container-fluid account">
        <div className="row ms-auto justify-content-center account_details">
          <div className="col-lg-5 col-md-6 col-sm-10 col-10 bg-body shadow">
            <h2 className="p-5 text-uppercase">Sign In</h2>
            <div className="p-5">
              <form onSubmit={submitForm}>
                <input
                  className="form-control shadow-none fs-4"
                  type="text"
                  name="name"
                  value={udata.name}
                  onChange={handleInput}
                  placeholder="Enter Username"
                  required
                />
                <br />
                <input
                  className="form-control shadow-none fs-4"
                  type="password"
                  name="password"
                  value={udata.password}
                  onChange={handleInput}
                  placeholder="Enter Password"
                  required
                />
                <br />
                <div className="fs-4">
                  <a
                    className="text-decoration-none"
                    href="#"
                    style={{ color: "#8e07e4" }}
                  >
                    Forget password?
                  </a>
                  <br />
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{ color: "#8e07e4" }}
                  >
                    Create a new account
                  </a>
                  <br />
                  <br />
                </div>
                <button className="btn btn-lg">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
