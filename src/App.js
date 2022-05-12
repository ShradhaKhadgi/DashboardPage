import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home/*" element={<Navbar />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
