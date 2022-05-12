import React from "react";
import { FiPlus } from "react-icons/fi";

const Profile = () => {
  const json = localStorage.getItem("LoginUser");
  const user = JSON.parse(json);
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 col-md-8 col-sm-12">
            <div className="d-flex justify-content-between ">
              <div>
                <h1>Dashboard</h1>
                <p className="text fw-bold">Welcome back, {user.name}</p>
              </div>
              <div className="mt-4">
                <button
                  className="btn text-light"
                  type="submit"
                  style={{ background: "#82db1d" }}
                >
                  <FiPlus /> Add Unit
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="d-flex flex-row align-items-center">
              <img
                src="https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png"
                alt="profile"
                className="profile_icon rounded-circle mb-3"
              />
              <p className="mx-4 text fw-bold">{user.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
