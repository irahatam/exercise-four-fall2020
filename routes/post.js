// Show one blog post
const express = require("express");
const router = express.Router();
// Require firebase
const firebase = require("firebase");
// Initialize Firestore Database
const db = firebase.firestore();
// Reference a specific collection
const blogposts = db.collection("blogposts");
// If there is no ID procided, send this message
router.get("/", (req, res) => res.send("No Id Provided"));
// Get a post by ID
router.get("/:id", (req, res) => {
  // Get the query parameter from the URL and set it to a variable
  const queryId = req.params.id;
  // Query the collection
  blogposts
    .doc(queryId) // looking up document by ID
    .get()
    .then(function (doc) {
      if (doc.exists) {
        // Checking if the document exists
        const data = doc.data(); // Assigning the document data to a variable
        return res.send(data); // Send data to user who queries
      } else {
        // If no document exists
        return res.send("No document exists");
      }
    })
    .catch(function (error) {
      return res.send(error);
    });
});

module.exports = router;
