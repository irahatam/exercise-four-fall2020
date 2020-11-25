// Create blog post
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("Create a blog post"));

module.exports = router;
