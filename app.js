const express = require("express"); 
const app = express();
const port = process.env.PORT || 4000;

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcpvD4MKrpH6Zbqsm6jF8etN_-IWzn9WA",
    authDomain: "exercise-four-fall-2020.firebaseapp.com",
    databaseURL: "https://exercise-four-fall-2020.firebaseio.com",
    projectId: "exercise-four-fall-2020",
    storageBucket: "exercise-four-fall-2020.appspot.com",
    messagingSenderId: "175530479710",
    appId: "1:175530479710:web:6c10da85e7e4491841e4cf"
};

// Firebase
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);
// Routes Import
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createBlogPost.js");
// Routes
app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

app.listen(port, () => 
    console.log(`Exercise Four is running at localhost:${port}`)
);