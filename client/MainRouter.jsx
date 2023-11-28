// MainRouter.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./core/Home";
import About from "./core/About";
import Cakes from "./product/Cakes";
import CreateCake from "./product/add";
import CustomOrder from "./core/CustomOrder";
import Signup from "./user/Signup";
import Signin from "./lib/Signin";
import AccountSetting from "./core/AccountSetting";
import Account from "./core/Account"; // Import your AccountSetting component

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cake" element={<Cakes />} />
        <Route path="/add" element={<CreateCake />} />
        <Route path="/customorder" element={<CustomOrder />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user/:userId" element={<AccountSetting />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
