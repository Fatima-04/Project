import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./core/Home";
import About from "./core/About";
import Cakes from "./core/Cakes";
import Account from "./core/Account";
import CustomOrder from "./core/CustomOrder";
import Signup from "./core/Signup";
import Signin from "./lib/Signin";
import PrivateRoute from "./lib/PrivateRoute.jsx";
import Switch from "react";
//import Signin from "./lib/Signin";


const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cake" element={<Cakes />} />

        <Route exact path="/customorder" element={<CustomOrder />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/account" element={<Account />} />
      </Routes>
    </div>
  );
};
export default MainRouter;
