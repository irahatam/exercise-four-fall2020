// Show one blog post
const express = require("express");
const router = express.Router();
// Require firebase
const firebase = require("firebase");
// Initialize Firestore Database
const db = firebase.firestore();
// Reference a specific collection
const blogposts = db.collection("blogposts");

router.get("/:id", (req, res) => {
  const queryId = req.params.id;

  res.send("A Blog Post");
});

module.exports = router;
