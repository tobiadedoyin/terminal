const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("i'm inside the post");
});

router.get("/specific", (req, res) => {
  res.send("inside specific route");
});

module.exports = router;
