// MainRouter.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./core/Home";
import Cart from "./core/Cart";
import Cakes from "./product/Cakes";
import CreateCake from "./product/add";
import UpdateCake from "./product/update";

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
        <Route path="/cart" element={<Cart />} />
        <Route path="/cake" element={<Cakes />} />
        <Route path="/add" element={<CreateCake />} />
        <Route path="/update/:cakeId" element={<UpdateCake />} />
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
