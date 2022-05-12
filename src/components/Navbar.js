import React from "react";
import { useNavigate } from "react-router-dom";
import { BiTachometer } from "react-icons/bi";
import { FiBarChart2 } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiNotification4Line } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import Dashboard from "../pages/Dashboard";

const Navbar = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  const Logout = () => {
    localStorage.removeItem("LoginUser");
    routeChange();
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-auto col-sm-auto sticky-top shadow">
            <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top h-100">
              <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center sticky-top align-items-center">
                <li>
                  <a
                    to="#"
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Home"
                  >
                    <BiTachometer
                      className="fs-2 icon"
                      style={{ color: "#2d0290" }}
                    />
                    <br />
                    <label style={{ color: "#2d0290" }}>Dashboard</label>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Analytics"
                  >
                    <FiBarChart2 className="fs-2 icon" />
                    <br />
                    <label>Analytics</label>
                  </a>
                </li>
                <li>
                  <a
                    to="#"
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Trading"
                  >
                    <BsCurrencyDollar className="fs-2 icon" />
                    <br />
                    <label>Trading</label>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Notifications"
                  >
                    <RiNotification4Line className="fs-2 icon" />
                    <br />
                    <label>Notifications</label>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-link py-3 px-2"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Logout"
                    onClick={Logout}
                  >
                    <MdLogout className="fs-2 icon" />
                    <br />
                    <label>Logout</label>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm p-3 min-vh-100">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
