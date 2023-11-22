import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./core/Home";
import About from "./core/About";
import Cakes from  "./product/Cakes";
import  Account from "./user/Account.jsx";
import CustomOrder from "./order/CustomOrder.jsx";
import Signup from "./user/Signup";
import Signin from "./lib/Signin";
import PrivateRoute from "./lib/PrivateRoute.jsx";
import Switch from "react";



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
