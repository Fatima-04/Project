/* 
Crystal Burnett – 301326769
Alice Huynh – 301341638
Fatima Tuz Zahra – 301347439
Vinh Tran – 301324533
Timothy Li – 301201910
Code Confectioners E-Commerce Website for Bakery
*/

import express from "express";
import authCtrl from "../controllers/auth.controller.js";
const router = express.Router();
router.route("/auth/signin").post(authCtrl.signin);
router.route("/auth/signout").get(authCtrl.signout);
export default router;
