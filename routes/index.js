// Show all blogposts
const express = require("express");
const router = express.Router();
// Require firebase
const firebase = require("firebase");
// Initialize Firestore Database
const db = firebase.firestore();
// Reference a specific collection
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => {
  // Inside of this arrow funciton, we can do anything we want as long as we return at the end
  const blogpostsArray = [];

  blogposts
    .get()
    .then(function (querySnapshot) {
      console.log("querySnapshot", querySnapshot);
      // Loop through query snapshot and push into array
      querySnapshot.forEach((doc) => {
        blogpostsArray.push(doc.data());
      });
      // Return array
      return res.send(blogpostsArray);
    })
    .catch(function (e) {
      console.warn("error", e);
      return res.send(error);
    });
});

module.exports = router;
