import React from "react";
import Balance from "../components/Balance";
import Countries from "../components/Countries";
import Members from "../components/Members";
import Profile from "../components/Profile";

const Dashboard = () => {
  return (
    <div className="mt-5">
      <Profile />
      <Balance />
      <Countries />
      <Members />
    </div>
  );
};

export default Dashboard;
