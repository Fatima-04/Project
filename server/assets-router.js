const express = require("express");
const router = express.Router();
const imageRegex = /\/.+\.(svg|png|jpg|png|jpeg)$/; // You can add other image formats
const videoRegex = /\/.+\.(mp4|ogv)$/;
const server = "https://codeconfectioners-ychr.onrender.com";
router.get(imageRegex, (req, res) => {
  const filePath = req.path;
  res.redirect(303, `${server}/src${filePath}`);
});
router.get(videoRegex, (req, res) => {
  const filePath = req.path;
  res.redirect(303, `${server}/src${filePath}`);
});
module.exports = router;
